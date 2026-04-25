import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = !saved || saved === 'dark';
    setIsDark(prefersDark);
    document.documentElement.classList.toggle('light', !prefersDark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('light', !next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-300 hover:text-foreground hover:border-foreground/20 overflow-hidden"
    >
      <Sun className={`h-4 w-4 absolute transition-all duration-500 ease-out ${isDark ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`} />
      <Moon className={`h-4 w-4 absolute transition-all duration-500 ease-out ${isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'}`} />
    </button>
  );
}
