import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { ViewStateService } from '../../services/view-state.service';
import { Character } from '../../models/character';
@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  type: string = 'people';

  private categoryChangedSubscription: Subscription = new Subscription();

  all: Character;

  private characterChangedSubscription: Subscription = new Subscription();

  constructor(private viewStateService: ViewStateService) { }

  ngOnInit() {
    this.getCharactersType();
    this.characterChangedSubscription = this.viewStateService.characterChanged.subscribe((characters) => {
      this.all = characters;
    });
    this.categoryChangedSubscription = this.viewStateService.categoryChanged.subscribe((category) => {
      this.type = category;
      this.getCharactersType();
    });
  }

  getCharactersType() {
    this.viewStateService.getAllCharacters(this.type);
  }
}
