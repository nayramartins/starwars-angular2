import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';

import { Character } from '../models/character';

@Injectable()
export class ViewStateService {

  private baseUrl: string = 'http://swapi.co/api'

  characterSubject: Subject<any> = new Subject<any>();

  characterChanged: Observable<Character> = this.characterSubject.asObservable();

  categorySubject: Subject<string> = new Subject<string>();

  categoryChanged: Observable<string> = this.categorySubject.asObservable();

  constructor(private http: Http) { }

  getAllCharacters(type: string, page: number): Promise<Character[]> {
    return this.http.get(`${this.baseUrl}/${type}/?page=${page}`)
      .toPromise()
      .then(response => {
        let characters = this.mapCharacters(response);
        let pages = Math.ceil(response.json().count / 10);
        let viewContext = [characters, pages];
        this.characterSubject.next(viewContext);
      })
      .catch(this.handleError);
  }

  search(term: string, type: string): Promise<void> {
    return this.http.get(`${this.baseUrl}/${type}/?search=${term}`)
      .toPromise()
      .then(response => {
        let characters = this.mapCharacters(response);
        let pages = Math.ceil(response.json().count / 10);
        let viewContext = [characters, pages];
        this.characterSubject.next(viewContext);
      })
      .catch();
  }

  mapCharacters(response: Response) {
    return response.json().results.map(this.toCharacter);
  }

  toCharacter(data: any): Character {
    let character = <Character>({
      name: data.name,
      gender: data.gender,
      homeworld: data.homeworld,
      birth_year: data.birth_year
    });
    return character;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  setCurrentCategory(category: string): void {
    return this.categorySubject.next(category);
  }

}
