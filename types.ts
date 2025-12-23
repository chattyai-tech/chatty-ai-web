import { ReactNode } from 'react';

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
  featured?: boolean;
}

export interface FounderProps {
  name: string;
  title: string;
  bio: string;
  image?: string;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
  details?: string[];
  icon: ReactNode;
  isActive: boolean;
  onClick: () => void;
}
