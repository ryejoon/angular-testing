import {Hero, HeroService} from './hero.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {defer} from 'rxjs';

let httpClientSpy: { get: jasmine.Spy };
let heroService: HeroService;

beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  heroService = new HeroService(httpClientSpy as any);
});

describe('heroService', () => {
  it('should return expected heroes (HttpClient called once)', () => {
    const expectedHeroes: Hero[] = [{id: 1, name: 'A'}, {id: 2, name: 'B'}];
    httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));

    heroService.getHeroes().subscribe(
      heroes => expect(heroes).toEqual(expectedHeroes, 'expected heroes'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    heroService.getHeroes().subscribe(
      heroes => fail('expected an error, not heroes'),
      error => expect(error.message).toContain('404 Not Found')
    );
  });
});

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

