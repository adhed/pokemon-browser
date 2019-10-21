import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { PokemonListElement } from '@app/pokemon-browser/models';

@Component({
  selector: 'app-pokemon-list-element',
  templateUrl: './pokemon-list-element.component.html',
  styleUrls: ['./pokemon-list-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListElementComponent {
  @Input() public pokemon: PokemonListElement;

  public get pokemonLink(): string[] {
    if (!this.pokemon) {
      return [];
    }

    const urlParts = this.pokemon.url.split('/');
    const id = urlParts[urlParts.length - 2];

    return ['details', id];
  }
}
