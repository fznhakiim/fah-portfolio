import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const navItems = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Stack' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open]);

  const handleClick = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="md:hidden"
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="container py-8 flex flex-col gap-1">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleClick(item.href); }}
              className="flex items-center py-4 text-lg font-medium text-muted-foreground border-b border-border transition-all hover:text-foreground hover:pl-3"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
