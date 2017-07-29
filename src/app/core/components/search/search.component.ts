import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { ViewStateService } from '../../services/view-state.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  type: string = 'people';

  private searchTerms = new Subject<string>();

  constructor(private viewStateService: ViewStateService) { }

  ngOnInit(): void {

  }

  search(term: string, type: string): void {
    this.viewStateService.search(term, type);
  }

}
