import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Params } from '@angular/router';
import { NavigationService } from '@app/pokemon-browser/services';
import { AppRoutes } from '@app/pokemon-browser/constants';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-details-nav',
  templateUrl: './pokemon-details-nav.component.html',
  styleUrls: ['./pokemon-details-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonDetailsNavComponent implements OnDestroy, OnInit {
  public readonly faArrowCircleLeft: IconDefinition = faArrowCircleLeft;
  public readonly faArrowCircleRight: IconDefinition = faArrowCircleRight;

  private pokemonId: number;
  private readonly destroy$: Subject<void> = new Subject();

  constructor(
    private readonly navService: NavigationService,
    private readonly route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.route.params
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((params: Params) => this.pokemonId = parseInt(params.id, 10));
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onPrevClick(): void {
    const previousId = Math.max(this.pokemonId - 1, 1);

    this.navService.navigate([AppRoutes.Browser, AppRoutes.Details, previousId]);
  }

  public onNextClick(): void {
    const nextId = this.pokemonId + 1;
    this.navService.navigate([AppRoutes.Browser, AppRoutes.Details, nextId]);
  }

  public onBackToListClick(): void {
    this.navService.navigate([AppRoutes.Browser]);
  }
}
