import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Article } from '../models/Article.model';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public articles$: Observable<Article[]>;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.articles$ = this.getArticles();
  }

  getArticles(): Observable<Article[]> {
    return this.newsService.getArticles();
  }

  searchKeywords(keywords?: string): void {
    this.articles$ = this.newsService.getArticles(keywords);
  }
}
