export interface NavItem {
  label: string;
  path: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  category: 'Group' | 'Personal' | 'Hybrid';
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}