import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonListElementComponent } from './components/pokemon-list-element/pokemon-list-element.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';



@NgModule({
  declarations: [PokemonListComponent, PokemonListElementComponent, PokemonDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class PokemonsModule { }
