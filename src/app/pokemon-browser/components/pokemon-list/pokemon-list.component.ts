import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListElement } from '@app/pokemon-browser/models';
import { PokemonListService } from '@app/pokemon-browser/services';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent implements OnInit {
  public pokemons$: Observable<PokemonListElement[]>;

  constructor(
    private readonly pokemonListService: PokemonListService,
  ) { }

  public ngOnInit(): void {
    this.pokemons$ = this.pokemonListService.getPokemons();
  }

}
