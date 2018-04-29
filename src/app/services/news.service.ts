import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { News } from '../models/News.model';
import { Article } from '../models/Article.model';

@Injectable()
export class NewsService {

  private key = environment.news_key;
  private url = `https://newsapi.org/v2/top-headlines`;

  public country = 'gb';

  constructor(private http: HttpClient) {}


  private createUrl = (keywords: string) => {
    const query = keywords ? `&q=${keywords}` : '';
    return `${this.url}?apiKey=${this.key}&country=${this.country}${query}`;
  }


  // @todo add catcher
  getArticles(keywords?: string): Observable<Article[]> {
    return this.http.get(this.createUrl(keywords))
      .pipe(
        map((news: News) => <Article[]>news.articles),
      );
  }
}
