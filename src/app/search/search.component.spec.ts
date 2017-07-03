import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { SearchComponent } from './search.component';
import { TmdbService } from '../tmdb.service';
import { MockTmdbService } from '../MockStubs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ SearchComponent ]
    });
    TestBed.overrideComponent(SearchComponent, {
      set: {
        providers: [
          {provide: TmdbService, useClass: MockTmdbService}
        ]
      }
    })
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
