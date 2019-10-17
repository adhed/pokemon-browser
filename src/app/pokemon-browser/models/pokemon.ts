export interface Pokemon {
  id: string;
  name: string;
  sprites: PokemonSprites;
  stats: PokemonStats[];
}

export interface PokemonSprites {
  front_default: string;
}

export interface PokemonStats {
  base_stat: number;
  effor: number;
  stat: PokemonStat;
}

export interface PokemonStat {
  name: string;
  url: string;
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
