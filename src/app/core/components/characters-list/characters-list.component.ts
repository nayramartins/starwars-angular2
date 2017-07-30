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

  pages: number;

  pageItems: any[] = [];

  currentPage: number = 1;

  private categoryChangedSubscription: Subscription = new Subscription();

  all: Character;

  private characterChangedSubscription: Subscription = new Subscription();

  constructor(private viewStateService: ViewStateService) { }

  ngOnInit() {
    this.getCharactersType();
    this.characterChangedSubscription = this.viewStateService.characterChanged.subscribe((viewContext) => {
      this.all = viewContext[0];
      this.pages = viewContext[1];
      this.getPageNumber();
    });
    this.categoryChangedSubscription = this.viewStateService.categoryChanged.subscribe((category) => {
      this.type = category;
      this.getCharactersType();
    });
  }

  getCharactersType(): void {
    this.viewStateService.getAllCharacters(this.type, this.currentPage);
  }

  getPageNumber(): any {
    let i;
    this.pageItems = []
    for (i = 1; i <= this.pages; i++) {
      this.pageItems.push(i);
    };
    console.log(this.pageItems);
  }

  setCurrentPage(pageItem: number): any {
    this.currentPage = pageItem;
    this.getCharactersType();
  }
}
