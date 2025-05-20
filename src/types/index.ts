export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: number;
}

export interface Kegiatan {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: number;
}

export interface Prestasi {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: number;
}

export interface Donor {
  name: string;
  date: string;
  amount: string;
  purpose: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}