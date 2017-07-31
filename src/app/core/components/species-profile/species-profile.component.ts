import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Subscription } from 'rxjs/Rx';

import { ViewStateService } from '../../services/view-state.service';
import { Specie } from '../../models/specie';

@Component({
  selector: 'app-species-profile',
  templateUrl: './species-profile.component.html',
  styleUrls: ['./species-profile.component.scss']
})
export class SpeciesProfileComponent implements OnInit, OnDestroy {

  info: any;

  profileInfo: any = {};

  private selectionChangedSubscription: Subscription = new Subscription();

  constructor(private viewStateService: ViewStateService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.selectionChangedSubscription = this.viewStateService.selectionChanged.subscribe((info) => {
      this.profileInfo = info;
    });
    this.route.paramMap
      .switchMap((params: ParamMap) => this.viewStateService.getInfo('species', params.get('id')))
      .subscribe(info => this.info = info);
  }

  ngOnDestroy() {
    this.selectionChangedSubscription.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }

}
