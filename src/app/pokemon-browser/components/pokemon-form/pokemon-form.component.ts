import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonFormComponent {

  public pokemonId: FormControl = new FormControl(null, [Validators.required]);

  private get pokemonIdValue(): string {
    return this.pokemonId.value;
  }

  constructor(
    private readonly router: Router
  ) { }

  public onButtonClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.pokemonId.valid) {
      this.router.navigate(['browser', 'details', this.pokemonIdValue]);
    } else {
      this.router.navigate(['browser']);
    }
  }
}
