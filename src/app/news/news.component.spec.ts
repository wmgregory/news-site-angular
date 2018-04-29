import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  const articles = [
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
      declarations: [ NewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an article', () => {
    expect(component.articles).toEqual(articles);
  });
});
