import { Component, OnInit } from '@angular/core';
import { Article } from '../models/Article.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public articles: Article[];

  constructor() {
  }

  ngOnInit() {
    this.articles = [
      <Article>{
        'source': {'id': 'techcrunch', 'name': 'TechCrunch'},
        'author': 'Jon Evans',
        'title': 'Giving up on \'diversity and inclusion\'',
        'description': 'I went to see Arlan Hamilton of Backstage Capital speak this week. Her remarkable story is pretty well known by now…',
        'url': 'https://techcrunch.com/2018/04/29/giving-up-on-diversity-and-inclusion/',
        'urlToImage': 'https://techcrunch.com/wp-content/uploads/2018/04/shoe-diversity.jpg?w=764',
        'publishedAt': '2018-04-29T13:00:12Z'
      },
      <Article>{
        'source': {'id': 'techcrunch', 'name': 'TechCrunch'},
        'author': 'Jon Evans',
        'title': 'Giving up on \'diversity and inclusion\'',
        'description': 'I went to see Arlan Hamilton of Backstage Capital speak this week. Her remarkable story is pretty well known by now…',
        'url': 'https://techcrunch.com/2018/04/29/giving-up-on-diversity-and-inclusion/',
        'urlToImage': 'https://techcrunch.com/wp-content/uploads/2018/04/shoe-diversity.jpg?w=764',
        'publishedAt': '2018-04-29T13:00:12Z'
      },
      <Article>{
        'source': {'id': 'techcrunch', 'name': 'TechCrunch'},
        'author': 'Jon Evans',
        'title': 'Giving up on \'diversity and inclusion\'',
        'description': 'I went to see Arlan Hamilton of Backstage Capital speak this week. Her remarkable story is pretty well known by now…',
        'url': 'https://techcrunch.com/2018/04/29/giving-up-on-diversity-and-inclusion/',
        'urlToImage': 'https://techcrunch.com/wp-content/uploads/2018/04/shoe-diversity.jpg?w=764',
        'publishedAt': '2018-04-29T13:00:12Z'
      },
    ];
  }
}
