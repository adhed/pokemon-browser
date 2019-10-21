import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, of, BehaviorSubject } from 'rxjs';
import { Pokemon } from '@app/pokemon-browser/models';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap, catchError, tap } from 'rxjs/operators';
import { PokemonService } from '@app/pokemon-browser/services';
import { PokemonParsedStat, PokemonStat } from '@app/pokemon-browser/models/stats';
import { geParsedStats } from '@app/pokemon-browser/utils/stats-utils';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnDestroy, OnInit {

  public pokemonDetails$: Observable<Pokemon>;
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private readonly destroy$: Subject<void> = new Subject();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly pokemonService: PokemonService,
  ) { }

  public ngOnInit(): void {
    this.pokemonDetails$ = this.route.params
      .pipe(
        switchMap((params: Params) => {
          this.isLoading$.next(true);
          return this.pokemonService.getPokemon(params.id);
        }),
        tap(() => this.isLoading$.next(false)),
        catchError(() => {
          console.log('error');
          return of(null);
        }),
      );
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public geParsedStats(stats: PokemonStat[]): PokemonParsedStat {
    return geParsedStats(stats);
  }

}
