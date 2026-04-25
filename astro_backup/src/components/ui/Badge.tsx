import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline';
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default:
      'bg-primary text-primary-foreground',
    secondary:
      'bg-secondary/70 text-secondary-foreground border border-border/50',
    outline:
      'bg-transparent border border-border text-muted-foreground',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium transition-colors',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
