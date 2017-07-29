import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { CharactersService } from '../../services/characters.service';
import { Character } from '../../models/character';


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  all: Character;

  private characterChangedSubscription: Subscription = new Subscription();

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService.getAllCharacters();
    this.characterChangedSubscription = this.charactersService.characterChanged.subscribe((characters) => {
      this.all = characters;
    });
  }
}
