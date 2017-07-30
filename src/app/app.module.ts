import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';

import { ViewStateService } from './core/services/view-state.service';
import { CharactersListComponent } from './core/components/characters-list/characters-list.component';
import { CharactersCardComponent } from './core/components/characters-card/characters-card.component';
import { SearchComponent } from './core/components/search/search.component';
import { CategoryComponent } from './core/components/category/category.component';
import { CharactersProfileComponent } from './core/components/characters-profile/characters-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharactersCardComponent,
    SearchComponent,
    CategoryComponent,
    CharactersProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule
  ],
  providers: [ViewStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
