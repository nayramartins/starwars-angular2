import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { CharactersService } from './core/services/characters.service';
import { CharactersListComponent } from './core/components/characters-list/characters-list.component';
import { CharactersCardComponent } from './core/components/characters-card/characters-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharactersCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
