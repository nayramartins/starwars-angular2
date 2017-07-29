import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.scss']
})
export class CharactersCardComponent implements OnInit {

  @Input()
  content: string;

  constructor() { }

  ngOnInit() {
  }

}
