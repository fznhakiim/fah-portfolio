"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ChevronLeft, ChevronRight, Lock } from "lucide-react";
import { FaGithub, FaArrowRight, FaFigma } from "react-icons/fa6";
import { useRef, useState, useEffect } from "react";

function ImageSlider({ images, title, isPortrait = false }: { images: string[]; title: string, isPortrait?: boolean }) {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className={`relative w-full h-full group/slider overflow-hidden ${isMobile ? 'cursor-grab active:cursor-grabbing' : ''} ${isPortrait ? 'bg-slate-50' : ''}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          alt={title}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag={isMobile ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            if (!isMobile) return;
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              next();
            } else if (swipe > swipeConfidenceThreshold) {
              prev();
            }
          }}
          className={`w-full h-full ${isPortrait ? 'object-contain' : 'object-cover'} select-none`}
          draggable="false"
        />
      </AnimatePresence>

      {/* Desktop Arrows */}
      <div className="absolute inset-0 hidden md:flex items-center justify-between px-4 opacity-0 group-hover/slider:opacity-100 transition-opacity z-20">
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-sky-500 hover:text-white transition-all shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-sky-500 hover:text-white transition-all shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 pointer-events-none">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-sky-500' : 'w-1.5 bg-slate-300'}`}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectItem({ project, index }: { project: any; index: number }) {
  const ref = useRef(null);
  const isPortrait = project.tags.includes('Figma') || project.tags.includes('UI/UX');

  return (
    <div
      ref={ref}
      className="flex flex-col gap-10 mb-32 lg:mb-48 last:mb-0"
    >
      <div className="space-y-6 max-w-4xl">
        <div className="flex items-center gap-4">
          <span className="text-sky-500 font-black text-[10px] uppercase tracking-[0.4em]">0{index + 1}</span>
          <div className="flex gap-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 text-[9px] font-bold uppercase tracking-widest text-slate-500">
                {tag}
              </span>
            ))}
            {project.isPrivate && (
              <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-[9px] font-bold uppercase tracking-widest text-amber-600 flex items-center gap-1.5">
                <Lock className="w-2.5 h-2.5" />
                Private
              </span>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-4xl md:text-7xl font-black tracking-tight text-slate-900 uppercase">
            {project.title}
          </h3>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-sky-500 transition-all shadow-lg shadow-slate-900/10"
              >
                {project.githubUrl.includes('figma.com') ? (
                  <>
                    <FaFigma className="w-4 h-4" />
                    View Prototype
                  </>
                ) : (
                  <>
                    <FaGithub className="w-4 h-4" />
                    Source Code
                  </>
                )}
              </a>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-900 text-[10px] font-black uppercase tracking-widest hover:border-sky-500 hover:text-sky-600 transition-all shadow-sm"
              >
                <FaArrowRight className="w-3 h-3" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="group relative">
        <div className={`relative overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-[0_0_60px_-15px_rgba(14,165,233,0.5)] transition-all duration-500 ${isPortrait ? 'aspect-[4/5] max-w-lg' : 'aspect-[16/9] max-w-5xl'}`}>
          <ImageSlider images={project.images} title={project.title} isPortrait={isPortrait} />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-24 space-y-4">
          <span className="text-sky-500 font-black text-xs uppercase tracking-[0.5em]">Portfolio Highlights</span>
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] text-slate-900">
            Selected <br /> <span className="text-slate-300 opacity-60">Works.</span>
          </h2>
        </div>

        <div className="space-y-40">
          {projects.map((project, i) => (
            <ProjectItem key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
