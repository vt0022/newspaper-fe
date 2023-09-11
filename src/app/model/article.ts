import { Category } from './category';

export class Article {
  id!: number;
  title?: string;
  url?: string;
  slug?: string;
  author?: string;
  opening?: string;
  thumbnail?: string;
  detail?: string;
  publishedDate?: Date;
  category?: Category;
}
