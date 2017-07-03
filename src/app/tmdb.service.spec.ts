import { TestBed, inject } from '@angular/core/testing';
import { Http, HttpModule } from '@angular/http';
import { TmdbService } from './tmdb.service';
import { MockHttp } from './MockStubs';

describe('TmdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TmdbService, { provide: Http, useClass: MockHttp }]
    });
  });

  it('should be created', inject([TmdbService], (service: TmdbService) => {
    expect(service).toBeTruthy();
  }));
});
