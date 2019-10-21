import { PokemonStat } from './stats';

export interface Pokemon {
  id: string;
  name: string;
  sprites: PokemonSprites;
  stats: PokemonStat[];
}

export interface PokemonSprites {
  front_default: string;
}

export interface PokemonListResponse {
  count: string;
  next: string;
  previous: string;
  results: PokemonListElement[];
}

export interface PokemonListElement {
  name: string;
  url: string;
}

export interface PokemonCache {
  [id: string]: Pokemon;
}

