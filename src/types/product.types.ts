export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image?: string;
  specifications?: Record<string, string>;
  features?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features: string[];
  benefits?: string[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon?: string;
  solutions?: string[];
}
