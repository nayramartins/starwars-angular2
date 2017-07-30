import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';

import { Character } from '../models/character';
import { Planet } from '../models/planet';
import { Specie } from '../models/specie';
import { Starship } from '../models/starship';

@Injectable()
export class ViewStateService {

  private baseUrl: string = 'http://swapi.co/api'

  infoSubject: Subject<any> = new Subject<any>();

  infoChanged: Observable<Character> = this.infoSubject.asObservable();

  categorySubject: Subject<string> = new Subject<string>();

  categoryChanged: Observable<string> = this.categorySubject.asObservable();

  selectionSubject: Subject<any> = new Subject<any>();

  selectionChanged: Observable<any> = this.selectionSubject.asObservable();

  constructor(private http: Http) { }

  getAllInfo(type: string, page: number): Promise<any> {
    return this.http.get(`${this.baseUrl}/${type}/?page=${page}`)
      .toPromise()
      .then(response => {
        let characters = this.mapInfo(response, type);
        let pages = Math.ceil(response.json().count / 10);
        let viewContext = [characters, pages];
        this.infoSubject.next(viewContext);
      })
      .catch(this.handleError);
  }

  search(term: string, type: string): Promise<void> {
    return this.http.get(`${this.baseUrl}/${type}/?search=${term}`)
      .toPromise()
      .then(response => {
        let info = this.mapInfo(response, type);
        let pages = Math.ceil(response.json().count / 10);
        let viewContext = [info, pages];
        this.infoSubject.next(viewContext);
      })
      .catch();
  }

  mapInfo(response: Response, type: string) {
    let typeOfRequest;
    if (type === 'people') typeOfRequest = this.toCharacter;
    if (type === 'species') typeOfRequest = this.toSpecie;
    if (type === 'planets') typeOfRequest = this.toPlanet;
    if (type === 'starships') typeOfRequest = this.toStarship;
    return response.json().results.map(typeOfRequest);
  }

  toCharacter(data: any): Character {
    let character = <Character>({
      name: data.name,
      gender: data.gender,
      homeworld: data.homeworld,
      birth_year: data.birth_year,
      type: data.url.split('/')[4],
      id: data.url.split('/')[5]
    });
    return character;
  }

  toStarship(data: any): Starship {
    let starship = <Starship>({
      name: data.name,
      model: data.model,
      passengers: data.passengers,
      cargo_capacity: data.cargo_capacity,
      type: data.url.split('/')[4],
      id: data.url.split('/')[5]
    });
    return starship;
  }

  toSpecie(data: any): Specie {
    let specie = <Specie>({
      name: data.name,
      classification: data.classification,
      designation: data.designation,
      language: data.language,
      type: data.url.split('/')[4],
      id: data.url.split('/')[5]
    });
    return specie;
  }

  toPlanet(data: any): Planet {
    let planet = <Planet>({
      name: data.name,
      rotation_period: data.rotation_period,
      population: data.population,
      residents: data.residents,
      type: data.url.split('/')[4],
      id: data.url.split('/')[5]
    });
    return planet;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  setCurrentCategory(category: string): void {
    return this.categorySubject.next(category);
  }

  setSelectedCharacter(character: any): void {
    return this.selectionSubject.next(character);
  }

  getCharacter(type: string, id: string) {
    return this.http.get(`${this.baseUrl}/${type}/${id}`)
      .toPromise()
      .then(response => {
        let character = this.toCharacter(response.json());
        this.selectionSubject.next(character);
      })
      .catch((err) => console.log(err));
  }
}
