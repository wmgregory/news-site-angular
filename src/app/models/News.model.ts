import { Article } from './Article.model';

export class News {
  articles: Article[];
  status: string;
  totalResults: number;
}
