import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs/Rx';
import { ViewStateService } from '../../services/view-state.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  private categoryChangedSubscription: Subscription = new Subscription();

  type: string = 'people';

  private searchTerms = new Subject<string>();

  constructor(private viewStateService: ViewStateService) { }

  ngOnInit() {
    this.setCurrentType();
  }

  search(term: string, type: string): void {
    this.viewStateService.search(term, type);
  }

  setCurrentType() {
    this.categoryChangedSubscription = this.viewStateService.categoryChanged.subscribe((category) => {
      this.type = category;
    });
  }

  ngOnDestroy() {
    this.categoryChangedSubscription.unsubscribe();
  }

}
