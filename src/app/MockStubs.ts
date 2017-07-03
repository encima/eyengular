import {Observable} from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {MockConfig} from './MockConfig';

export class MockHttp {

    get() {
        const response = new ResponseOptions({
         body: JSON.stringify(MockConfig)
        });
        return Observable.of(new Response(response));
    }
}

export class MockTmdbService {
    
    search(terms: Observable<string>) {
        return terms.debounceTime(800)
        .distinctUntilChanged()
        .switchMap(term => Observable.from(term));
    }
}


