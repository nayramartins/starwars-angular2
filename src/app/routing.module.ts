import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersListComponent } from './core/components/characters-list/characters-list.component';
import { CharactersProfileComponent } from './core/components/characters-profile/characters-profile.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: CharactersListComponent },
    { path: ':type/:id', component: CharactersProfileComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}