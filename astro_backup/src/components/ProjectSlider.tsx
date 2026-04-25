import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '@/data/portfolio';

interface Props {
  projects: Project[];
}

export default function ProjectSlider({ projects = [] }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!projects || projects.length === 0) return null;

  const project = projects[currentIndex];
  if (!project) return null;

  const isMobile = project.tags?.some(tag => tag.toLowerCase().includes('mobile') || tag.toLowerCase().includes('figma'));

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveImageIndex(0);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveImageIndex(0);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!project.images) return;
    setActiveImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!project.images) return;
    setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentImage = project.images?.[activeImageIndex] || project.coverImage;

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 lg:px-0">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes projectSlideIn {
          from { opacity: 0; transform: translateY(10px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .project-animate {
          animation: projectSlideIn 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}} />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center min-h-[650px] lg:h-[650px]">
        
        {/* IMAGE SIDE */}
        <div className="lg:col-span-7 h-full flex items-center justify-center relative group/gallery">
          <div className={`relative transition-all duration-700 ease-in-out rounded-[2.5rem] overflow-hidden border border-border/50 bg-secondary shadow-2xl ${isMobile ? 'h-[550px] aspect-[9/18]' : 'w-full aspect-[16/10]'}`}>
            
            <div key={`${currentIndex}-${activeImageIndex}`} className="absolute inset-0 project-animate">
              <img
                src={currentImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Internal Gallery Arrows */}
            {(project.images?.length || 0) > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/gallery:opacity-100 transition-all z-30"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/gallery:opacity-100 transition-all z-30"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-1 z-30">
                  {project.images?.map((_, i) => (
                    <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === activeImageIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/30'}`} />
                  ))}
                </div>
              </>
            )}

            {/* Project Navigation Control */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-40">
               <div className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">
                  Photo {activeImageIndex + 1} / {project.images?.length}
               </div>
               
               <div className="flex items-center gap-1 bg-background/90 backdrop-blur-2xl p-1 rounded-2xl border border-border shadow-2xl">
                  <button onClick={prevProject} className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-secondary transition-all">
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <div className="px-3 text-center min-w-[50px]">
                     <span className="block text-[10px] font-black opacity-30 uppercase leading-none mb-1">Proj</span>
                     <span className="text-sm font-bold leading-none">{currentIndex + 1}/{projects.length}</span>
                  </div>
                  <button onClick={nextProject} className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center hover:opacity-90 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </button>
               </div>
            </div>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="lg:col-span-5 h-full flex flex-col justify-center">
          <div key={`content-${currentIndex}`} className="project-animate space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags?.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-secondary text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-4xl lg:text-6xl font-black tracking-tighter leading-[0.9]">
                {project.title}
              </h3>
            </div>

            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-md min-h-[100px]">
              {project.description}
            </p>

            <div className="pt-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-4 text-sm font-black uppercase tracking-widest text-accent hover:text-foreground transition-all"
                >
                  <span className="relative pb-1">
                    {project.linkLabel || 'View Work'}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent/20 group-hover:bg-accent transition-colors" />
                  </span>
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover/link:bg-accent group-hover/link:border-accent group-hover/link:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              )}
            </div>

            {/* Bottom Global Progress - GREEN */}
            <div className="pt-12">
               <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold opacity-30 uppercase tracking-widest">Portfolio Progress</span>
                  <span className="text-[10px] font-bold opacity-50">{Math.round(((currentIndex + 1) / projects.length) * 100)}%</span>
               </div>
               <div className="h-1 w-full bg-border/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all duration-1000 ease-out"
                    style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
                  />
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
