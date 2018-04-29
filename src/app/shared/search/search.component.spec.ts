import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture).toMatchSnapshot();
  });

  describe('keywords', () => {

    it('should add a keyword', () => {
      component.keyword = 'updated value';
      component.addKeyword();

      fixture.detectChanges();

      expect(component.keywords).toEqual(['updated value']);
    });

    it('should remove a keyword', () => {
      component.keywords = ['remove'];

      fixture.detectChanges();

      expect(component.keywords).toEqual(['remove']);

      component.removeKeyword('remove');

      fixture.detectChanges();

      expect(component.keywords).toEqual([]);
    });

    it('should clear all keywords', () => {
      component.keywords = ['remove', 'all', 'words'];

      fixture.detectChanges();

      expect(component.keywords).toEqual(['remove', 'all', 'words']);

      component.clear();

      fixture.detectChanges();

      expect(component.keywords).toEqual([]);
    });

  });
});
