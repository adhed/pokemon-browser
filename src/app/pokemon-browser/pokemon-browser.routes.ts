import { Routes } from '@angular/router';
import { PokemonBrowserComponent } from './pokemon-browser.component';
import { PokemonDetailsComponent, PokemonListComponent } from './components';

export const routes: Routes = [
  {
    path: '', component: PokemonBrowserComponent, children: [
      { path: '', component: PokemonListComponent },
      { path: 'details/:id', component: PokemonDetailsComponent },
    ]
  },
];
