import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs/Rx';

import { ViewStateService } from '../../services/view-state.service';

const categories = [
  { name: 'Name', type: 'people' },
  { name: 'Homeworld', type: 'planets' },
  { name: 'Starships', type: 'starships' },
  { name: 'Species', type: 'species' },
];
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: any[];

  currentCategory: string = 'people';

  constructor(private viewStateService: ViewStateService) { }

  ngOnInit() {
    this.categories = categories;
  }

  setCurrentCategory(category) {
    this.currentCategory = category.type;
    this.viewStateService.setCurrentCategory(this.currentCategory);
  }
}
