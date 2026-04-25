import { useRef, useState, type MouseEvent } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import type { Project } from '@/data/portfolio';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const cardRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 ease-out-expo hover:border-transparent"
      style={{
        backgroundImage: isHovered
          ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, hsl(var(--clr-accent) / 0.08), transparent 40%)`
          : 'none',
      }}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, hsl(var(--clr-accent) / 0.15), transparent 40%)`,
        }}
      />

      <div className="relative z-10 bg-card rounded-xl overflow-hidden m-px">
        <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
          <span className="absolute top-3 left-3 z-20 flex h-6 w-6 items-center justify-center rounded-md bg-background/70 backdrop-blur-sm text-[0.65rem] font-bold text-muted-foreground border border-border/50">
            {String(project.id).padStart(2, '0')}
          </span>
          <img
            src={project.coverImage}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-all duration-700 ease-out-expo group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>

        <div className="px-5 pb-5 pt-4 space-y-2.5">
          <h3 className="text-base font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent">
            {project.title}
          </h3>
          <p className="text-[0.82rem] text-muted-foreground leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.68rem] font-medium bg-secondary text-muted-foreground border border-transparent transition-colors duration-300 group-hover:border-border"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-5 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="group/link inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                View Live
                <ExternalLink className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
