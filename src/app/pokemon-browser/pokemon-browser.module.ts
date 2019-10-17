import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonListElementComponent } from './components/pokemon-list-element/pokemon-list-element.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonBrowserComponent } from './pokemon-browser.component';
import { RouterModule } from '@angular/router';
import { routes } from './pokemon-browser.routes';
import { PokemonFormComponent } from './components';
import { PokemonService } from './services/pokemon.service';
import { PokemonListService } from './services/pokemon-list.service';
import { ListPaginationComponent } from './components/list-pagination/list-pagination.component';


@NgModule({
  declarations: [
    PokemonBrowserComponent,
    PokemonListComponent,
    PokemonFormComponent,
    PokemonListElementComponent,
    PokemonDetailsComponent,
    ListPaginationComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    PokemonService,
    PokemonListService,
  ]
})
export class PokemonBrowserModule { }
