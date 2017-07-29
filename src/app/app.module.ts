import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CharactersService } from './core/services/characters.service';
import { CharactersListComponent } from './core/components/characters-list/characters-list.component';
import { CharactersCardComponent } from './core/components/characters-card/characters-card.component';
import { SearchComponent } from './core/components/search/search.component';
import { SearchService } from './core/services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharactersCardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CharactersService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
