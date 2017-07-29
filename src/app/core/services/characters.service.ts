import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';

import { Character } from '../models/character';

@Injectable()
export class CharactersService {

  private baseUrl: string = 'http://swapi.co/api/people'

    characterSubject: Subject<Character> = new Subject<Character>();

    characterChanged: Observable<Character> = this.characterSubject.asObservable();

  constructor(private http: Http) { }

  getAllCharacters(): Promise<Character[]> {
    return this.http.get(this.baseUrl)
      .toPromise()
      .then(response => {
        let characters = this.mapCharacters(response);
        this.characterSubject.next(characters);
      })
      .catch(this.handleError);
  }

  mapCharacters (response: Response) {
    return response.json().results.map(this.toCharacter);
  }

  toCharacter (data: any): Character {
    let character = <Character> ({
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

}
