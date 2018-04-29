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


  private createUrl = () => {
    return `${this.url}?apiKey=${this.key}&country=${this.country}`;
  };


  // @todo add catcher
  getArticles(): Observable<Article[]> {
    return this.http.get(this.createUrl())
      .pipe(
        map((news: News) => <Article[]>news.articles),
      );
  }
}
