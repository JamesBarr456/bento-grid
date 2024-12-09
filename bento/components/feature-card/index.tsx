import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface FeatureCardProps {
  className?: string;
  variant?:
    | 'default'
    | 'purple_bold'
    | 'purple_ligth'
    | 'yellow_light'
    | 'yellow_bold';
  children?: ReactNode;
}

export function FeatureCard({
  variant = 'default',
  children,
  className,
}: FeatureCardProps) {
  const variants = {
    default: 'bg-white',
    purple_bold: 'bg-royal-orchid text-white',
    purple_ligth: 'bg-lavender-frost',
    yellow_light: 'bg-golden-mist',
    yellow_bold: 'bg-sunflower-glow',
  };

  return <Card className={cn(className, variants[variant])}>{children}</Card>;
}
