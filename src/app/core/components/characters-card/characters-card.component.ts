import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.scss']
})
export class CharactersCardComponent {

  @Input()
  content: string;

  constructor() { }
}
