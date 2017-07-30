import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Subscription } from 'rxjs/Rx';

import { ViewStateService } from '../../services/view-state.service';
import { Planet } from '../../models/planet';

@Component({
  selector: 'app-starships-profile',
  templateUrl: './starships-profile.component.html',
  styleUrls: ['./starships-profile.component.scss']
})
export class StarshipsProfileComponent implements OnInit {

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
      .switchMap((params: ParamMap) => this.viewStateService.getInfo('starships', params.get('id')))
      .subscribe(info => this.info = info);
  }

  goBack(): void {
    this.location.back();
  }
}
