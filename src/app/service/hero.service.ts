import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {fromPromise} from 'rxjs/internal-compatibility';

export interface Hero {
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    // @ts-ignore
    return this.httpClient.get('test');
  }
}
