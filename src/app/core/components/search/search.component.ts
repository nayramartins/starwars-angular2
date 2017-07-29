import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  type: string = 'name';

  private searchTerms = new Subject<string>();

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {

  }

  search(term: string, type: string): void {
    this.searchTerms.next(term);
  }

}
