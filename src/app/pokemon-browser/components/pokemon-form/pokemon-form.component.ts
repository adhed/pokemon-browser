import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NavigationService } from '@app/pokemon-browser/services';
import { AppRoutes } from '@app/pokemon-browser/constants';

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
    private readonly navService: NavigationService
  ) { }

  public onButtonClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.pokemonId.valid) {
      this.navService.navigate([AppRoutes.Browser, AppRoutes.Details, this.pokemonIdValue]);
    } else {
      this.navService.navigate([AppRoutes.Browser]);
    }
  }
}
