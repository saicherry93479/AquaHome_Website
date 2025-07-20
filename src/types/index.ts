export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  city: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'converted' | 'closed';
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  quickViewImages: string[];
  category: 'copper' | 'ro' | 'alkaline' | 'smart';
  isActive: boolean;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin';
}