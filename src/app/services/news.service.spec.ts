import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { httpMock } from '../../mocks/general.mocks';

import { NewsService } from './news.service';

describe('NewsService', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        NewsService,
        { provide: HttpClient, useClass: httpMock },
      ],
    });

    service = TestBed.get(NewsService);

    jest.spyOn(httpMock, 'get');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  //
  // it('should get articles', () => {
  //
  // });
});
