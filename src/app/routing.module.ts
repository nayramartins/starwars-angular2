import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersListComponent } from './core/components/characters-list/characters-list.component';
import { CharactersProfileComponent } from './core/components/characters-profile/characters-profile.component';
import { SpeciesProfileComponent } from './core/components/species-profile/species-profile.component';
import { PlanetsProfileComponent } from './core/components/planets-profile/planets-profile.component';
import { StarshipsProfileComponent } from './core/components/starships-profile/starships-profile.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: CharactersListComponent },
    { path: 'people/:id', component: CharactersProfileComponent },
    { path: 'people/:id', component: CharactersProfileComponent },
    { path: 'species/:id', component: SpeciesProfileComponent },
    { path: 'planets/:id', component: PlanetsProfileComponent },
    { path: 'starships/:id', component: StarshipsProfileComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}