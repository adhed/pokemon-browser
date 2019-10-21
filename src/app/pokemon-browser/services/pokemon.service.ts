import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from '@app/common/services';
import { POKEMON_API } from '@app/pokemon-browser/constants/api';
import { Pokemon, PokemonListResponse, PokemonCache } from '../models';

@Injectable()
export class PokemonService {

  private readonly simpleCache: PokemonCache = {};

  constructor(private readonly apiService: ApiService) {}

  public getPokemon(id: string): Observable<Pokemon> {
    if (this.simpleCache[id]) {
      return of(this.simpleCache[id]);
    } else {
      return this.apiService.getSingle(`${POKEMON_API}/${id}`)
        .pipe(
          tap((pokemon: Pokemon) => this.simpleCache[id] = pokemon)
        );
    }
  }

  public getPokemonList(limit: number, offset: number): Observable<PokemonListResponse> {
    return this.apiService
      .getSingle(`${POKEMON_API}/?limit=${limit}&offset=${offset}`);
  }
}
