import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonBrowserComponent } from './pokemon-browser/pokemon-browser.component';
import { routes } from './app.routes';


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
