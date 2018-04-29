export class Article {
  source: ArticleSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

class ArticleSource {
  id: string;
  name: string;
}
