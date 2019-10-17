import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, throwError, of } from 'rxjs';
import { Pokemon } from '@app/pokemon-browser/models';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap, takeUntil, catchError } from 'rxjs/operators';
import { PokemonService } from '@app/pokemon-browser/services';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnDestroy, OnInit {

  public pokemonDetails$: Observable<Pokemon>;

  private readonly destroy$: Subject<void> = new Subject();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly pokemonService: PokemonService,
  ) { }

  public ngOnInit(): void {
    this.pokemonDetails$ = this.route.params
      .pipe(
        switchMap((params: Params) => this.pokemonService.getPokemon(params.id)),
        catchError(() => of(null)),
      );
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
