export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject?: string;
  message: string;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectDetails: string;
  budget?: string;
  timeline?: string;
}
