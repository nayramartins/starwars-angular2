import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Character } from '../models/character';

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  searchByName(term: string, type: string): Observable<Character[]> {
    return this.http
        .get(`api/heroes/?${type}=${term}`)
        .map(response => response.json().data as Character[]);
  }
}