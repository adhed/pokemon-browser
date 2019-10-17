import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '@app/common/services';
import { Pokemon, PokemonListResponse } from '../models';
import { POKEMON_API } from '@app/pokemon-browser/constants/api';

@Injectable()
export class PokemonService {

  constructor(private readonly apiService: ApiService) {}

  public getPokemon(id: string): Observable<Pokemon> {
    return this.apiService.getSingle(`${POKEMON_API}/${id}`);
  }

  public getPokemonList(limit: number, offset: number): Observable<PokemonListResponse> {
    return this.apiService
      .getSingle(`${POKEMON_API}/?limit=${limit}&offset=${offset}`);
  }
}
