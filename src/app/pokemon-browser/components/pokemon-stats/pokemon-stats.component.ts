import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { PokemonParsedStat } from '@app/pokemon-browser/models/stats';
import { faHeart, faShieldAlt, faBolt, faTachometerAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonStatsComponent {
  @Input() public stats: PokemonParsedStat;

  public faHeart: IconDefinition = faHeart;
  public faBolt: IconDefinition = faBolt;
  public faShieldAlt: IconDefinition = faShieldAlt;
  public faTachometerAlt: IconDefinition = faTachometerAlt;

}
