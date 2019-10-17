import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/browser', pathMatch: 'full' },
  { path: 'browser', children: [
    { path: '', loadChildren: () => import('./pokemon-browser/pokemon-browser.module').then((imported) => imported.PokemonBrowserModule) }]
  },
  { path: '**', redirectTo: '/browser' }
];
