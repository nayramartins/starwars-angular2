import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Subscription } from 'rxjs/Rx';

import { ViewStateService } from '../../services/view-state.service';
import { Character } from '../../models/character';


@Component({
  selector: 'app-characters-profile',
  templateUrl: './characters-profile.component.html',
  styleUrls: ['./characters-profile.component.css']
})
export class CharactersProfileComponent implements OnInit {

  character: any;

  characterInfo: any = {};

  private selectionChangedSubscription: Subscription = new Subscription();

  constructor(private viewStateService: ViewStateService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.selectionChangedSubscription = this.viewStateService.selectionChanged.subscribe((character) => {
      this.characterInfo = character;
    });
    this.route.paramMap
      .switchMap((params: ParamMap) => this.viewStateService.getCharacter(params.get('type'), params.get('id')))
      .subscribe(character => this.character = character);
  }
}
