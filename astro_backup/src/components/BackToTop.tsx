import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/80 backdrop-blur-sm text-muted-foreground transition-all duration-400 ease-out hover:border-[hsl(165,60%,40%,0.5)] hover:text-[hsl(165,60%,40%)] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_hsl(165,60%,40%,0.12)] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ChevronUp className="h-4 w-4" />
    </button>
  );
}
