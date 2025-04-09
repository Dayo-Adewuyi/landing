export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface Job {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  postedDate: string;
}

export interface SearchFilters {
  keyword: string;
  location: string;
  category: string;
}
