import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Subscription } from 'rxjs/Rx';

import { ViewStateService } from '../../services/view-state.service';
import { Character } from '../../models/character';


@Component({
  selector: 'app-characters-profile',
  templateUrl: './characters-profile.component.html',
  styleUrls: ['./characters-profile.component.scss']
})
export class CharactersProfileComponent implements OnInit, OnDestroy {

  info: any;

  profileInfo: any = {};

  residents: any[] = [];

  private selectionChangedSubscription: Subscription = new Subscription();

  private relativeCharactersSubject: Subscription = new Subscription();

  constructor(private viewStateService: ViewStateService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.selectionChangedSubscription = this.viewStateService.selectionChanged.subscribe((info) => {
      this.profileInfo = info;
      this.residents = [];
      for (let i = 0; i < info.residents.length; i++) {
        this.viewStateService.getRelatedCharacters(info.residents[i]);
      }
    });
    this.relativeCharactersSubject = this.viewStateService.relativeCharacterChanged.subscribe((character) => {
      if (this.profileInfo.name !== character.name) this.residents.push(character);
    });
    this.route.paramMap
      .switchMap((params: ParamMap) => this.viewStateService.getInfo('people', params.get('id')))
      .subscribe(info => this.info = info);
  }

  ngOnDestroy() {
    this.selectionChangedSubscription.unsubscribe();
    this.relativeCharactersSubject.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }
}
