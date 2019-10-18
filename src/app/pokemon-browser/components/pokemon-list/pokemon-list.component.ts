import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PokemonListElement } from '@app/pokemon-browser/models';
import { PokemonListService, PaginationService } from '@app/pokemon-browser/services';
import { switchMap, tap, distinctUntilChanged } from 'rxjs/operators';
import { LIST_PAGE_MAX_RESULTS } from '@app/pokemon-browser/constants';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent implements OnInit {
  public pokemons$: Observable<PokemonListElement[]>;

  public isLoading$: Subject<boolean> = new Subject();

  constructor(
    private readonly pokemonListService: PokemonListService,
    private readonly paginationService: PaginationService,
  ) { }

  public ngOnInit(): void {
    this.pokemonListService.setPageResultsLimit(LIST_PAGE_MAX_RESULTS);

    this.pokemons$ = this.paginationService.currentPage$
      .pipe(
        distinctUntilChanged(),
        tap(() => this.isLoading$.next(true)),
        switchMap((currentPage: number) => {
          return this.pokemonListService.getPokemons(currentPage);
        }),
        tap(() => this.isLoading$.next(false)),
      );
  }

}
