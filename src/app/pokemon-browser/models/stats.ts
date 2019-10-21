export enum PokemonStatName {
  Hp = 'hp',
  Speed = 'speed',
  Defense = 'defense',
  SpecialDefense = 'special-defense',
  SpecialAttack = 'special-attack',
  Attack = 'attack'
}

export interface PokemonStat {
  effort: number;
  base_stat: number;
  stat: {
    name: PokemonStatName;
    url: string;
  };
}

export interface PokemonParsedStat {
  attack: number;
  specialAttack: number;
  specialDefense: number;
  defense: number;
  speed: number;
  hp: number;
}
