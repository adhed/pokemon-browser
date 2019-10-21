import { PokemonParsedStat, PokemonStat, PokemonStatName } from '../models/stats';

export const geParsedStats = (pokemonStats: PokemonStat[]): PokemonParsedStat => {
  return {
    attack: getStatValue(pokemonStats, PokemonStatName.Attack),
    defense: getStatValue(pokemonStats, PokemonStatName.Defense),
    specialAttack: getStatValue(pokemonStats, PokemonStatName.SpecialAttack),
    specialDefense: getStatValue(pokemonStats, PokemonStatName.SpecialDefense),
    speed: getStatValue(pokemonStats, PokemonStatName.Speed),
    hp: getStatValue(pokemonStats, PokemonStatName.Hp),
  };
};

export const getStatValue = (pokemonStats: PokemonStat[], statName: PokemonStatName): number => {
  const pokemonStat = pokemonStats.find((stat: PokemonStat) => stat.stat.name === statName);
  return pokemonStat ? pokemonStat.base_stat : 0;
};

