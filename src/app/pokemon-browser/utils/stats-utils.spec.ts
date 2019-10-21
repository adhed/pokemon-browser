import { PokemonStat, PokemonStatName } from '../models/stats';
import { getStatValue } from './stats-utils';

const mockedStats: PokemonStat[] = [
  { effort: 40, base_stat: 50, stat: { name: PokemonStatName.Attack, url: 'mocked-url'} },
  { effort: 20, base_stat: 10, stat: { name: PokemonStatName.Defense, url: 'mocked-url'} },
  { effort: 10, base_stat: 100, stat: { name: PokemonStatName.SpecialAttack, url: 'mocked-url'} },
];

describe('Pokemon stats utils', () => {
  let stats: PokemonStat[];

  beforeEach(() => {
    stats = [...mockedStats];
  });

  it(`should correctly retrieve Pokemon's attack value from API object`, () => {
    const attackValue = getStatValue(stats, PokemonStatName.Attack);
    expect(attackValue).toBe(50);
  });

  it(`should correctly retrieve Pokemon's defense value from API object`, () => {
    const value = getStatValue(stats, PokemonStatName.Defense);
    expect(value).toBe(10);
  });

  it(`should correctly retrieve Pokemon's special attack value from API object`, () => {
    const value = getStatValue(stats, PokemonStatName.SpecialAttack);
    expect(value).toBe(100);
  });
});
