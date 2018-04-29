import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { NewsComponent } from './news.component';

import { NewsService } from '../services/news.service';
import { newsServiceMock } from '../services/news.service.mocks';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  const articlesMock = [
      {
        'source': {'id': 'techcrunch', 'name': 'TechCrunch'},
        'author': 'Jon Evans',
        'title': 'Giving up on \'diversity and inclusion\'',
        'description': 'I went to see Arlan Hamilton of Backstage Capital speak this week. Her remarkable story is pretty well known by now…',
        'url': 'https://techcrunch.com/2018/04/29/giving-up-on-diversity-and-inclusion/',
        'urlToImage': 'https://techcrunch.com/wp-content/uploads/2018/04/shoe-diversity.jpg?w=764',
        'publishedAt': '2018-04-29T13:00:12Z'
      }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsComponent ],
      providers: [
        { provide: NewsService, useValue: newsServiceMock },
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();

    jest.spyOn(newsServiceMock, 'getArticles').mockReturnValue(Observable.of(articlesMock));

  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture).toMatchSnapshot();
  });

  it('should contain an article', async () => {
    const articles = await component.articles$;
    expect(articles.value).toEqual(articlesMock);
  });

  it('should search articles', async () => {
    const keywords = ['news'];
    const newArticlesMock = [...articlesMock, ...articlesMock];
    jest.spyOn(newsServiceMock, 'getArticles').mockReturnValue(Observable.of(newArticlesMock));

    component.searchArticles(keywords);
    const articles = await component.articles$;

    expect(newsServiceMock.getArticles).toHaveBeenCalledWith(keywords);
    expect(articles.value).toEqual(newArticlesMock);
  });
});
