import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { PokemonService } from '@app/pokemon-browser/services/pokemon.service';
import { PokemonListElement, PokemonListResponse } from '@app/pokemon-browser/models';

@Injectable()
export class PokemonListService {

  private currentOffset: number = 0;
  private pageResultsLimit: number = 10;

  constructor(
    private readonly pokemonService: PokemonService
  ) {}

  public setPageResultsLimit(limit: number): void {
    this.pageResultsLimit = limit;
  }

  public getPokemons(page: number): Observable<PokemonListElement[]> {
    this.currentOffset = (page - 1) * this.pageResultsLimit;

    return this.pokemonService
      .getPokemonList(this.pageResultsLimit, this.currentOffset)
      .pipe(
        map((result: PokemonListResponse) => result.results),
      );
  }
}
