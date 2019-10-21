import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pokemon-details-nav',
  templateUrl: './pokemon-details-nav.component.html',
  styleUrls: ['./pokemon-details-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailsNavComponent implements OnInit {
  public readonly faArrowCircleLeft: IconDefinition = faArrowCircleLeft;
  public readonly faArrowCircleRight: IconDefinition = faArrowCircleRight;

  private pokemonId: number;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => this.pokemonId = parseInt(params.id, 10));
  }

  public onPrevClick(): void {
    const previousId = Math.max(this.pokemonId - 1, 1);

    this.router.navigate(['browser', 'details', previousId]);
  }

  public onNextClick(): void {
    const nextId = this.pokemonId + 1;
    this.router.navigate(['browser', 'details', nextId]);
  }

  public onBackToListClick(): void {
    this.router.navigate(['browser']);
  }
}
