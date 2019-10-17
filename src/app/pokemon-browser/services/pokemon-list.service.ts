import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PokemonService } from '@app/pokemon-browser/services/pokemon.service';
import { PokemonListElement, PokemonListResponse } from '@app/pokemon-browser/models';

@Injectable()
export class PokemonListService {

  public pokemons$: Observable<PokemonListElement>;

  private currentOffset: number = 0;
  private readonly pageResultsLimit: number = 10;

  constructor(
    private readonly pokemonService: PokemonService
  ) {}

  public getPokemons(): Observable<PokemonListElement[]> {
    return this.pokemonService
      .getPokemonList(this.pageResultsLimit, this.currentOffset)
      .pipe(
        map((result: PokemonListResponse) => result.results)
      );
  }
}
