import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs/observable/of';

import { HttpClient } from '@angular/common/http';
import { httpMock } from '../../mocks/general.mocks';

import { NewsService } from './news.service';

describe('NewsService', () => {
  let service;

  const getArticlesData = {
    articles: [
      {
        'source': {'id': 'techcrunch', 'name': 'TechCrunch'},
        'author': 'Jon Evans',
        'title': 'Giving up on \'diversity and inclusion\'',
        'description': 'I went to see Arlan Hamilton of Backstage Capital speak this week. Her remarkable story is pretty well known by now…',
        'url': 'https://techcrunch.com/2018/04/29/giving-up-on-diversity-and-inclusion/',
        'urlToImage': 'https://techcrunch.com/wp-content/uploads/2018/04/shoe-diversity.jpg?w=764',
        'publishedAt': '2018-04-29T13:00:12Z'
      }
    ],
  };

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        NewsService,
        { provide: HttpClient, useValue: httpMock },
      ],
    });

    service = TestBed.get(NewsService);

    jest.spyOn(httpMock, 'get').mockReturnValue(of(getArticlesData));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get articles', () => {
    service.getArticles().subscribe((articles) => {
      expect(httpMock.get).toHaveBeenCalled();
      expect(articles.length).toBeGreaterThan(0);
    });
  });

  it('should search articles', () => {
    service.getArticles(['news']).subscribe((articles) => {
      expect(httpMock.get).toHaveBeenCalled();
      expect(articles.length).toBeGreaterThan(0);
    });
  });
});
