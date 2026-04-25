import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0';

    const variants = {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 shadow-sm',
      outline:
        'border border-border bg-transparent text-foreground hover:bg-accent hover:border-muted-foreground/30 hover:-translate-y-0.5',
      ghost: 'text-muted-foreground hover:bg-accent hover:text-foreground',
    };

    const sizes = {
      default: 'h-10 px-5',
      sm: 'h-9 px-3',
      lg: 'h-11 px-8',
      icon: 'h-9 w-9',
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
