export interface BaseEntity {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
}

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  website?: string;
}
