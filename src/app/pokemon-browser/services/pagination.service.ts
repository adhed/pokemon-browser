import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LIST_MAX_PAGE } from '../constants';

@Injectable()
export class PaginationService {
  private minPage: number = 1;
  private maxPage: number = LIST_MAX_PAGE;

  public currentPage$: BehaviorSubject<number> = new BehaviorSubject(this.minPage);

  public goToNextPage(): void {
    const nextPage = Math.min(this.maxPage, this.currentPage$.value + 1);
    this.currentPage$.next(nextPage);
  }

  public goToPreviousPage(): void {
    const nextPage = Math.max(this.minPage, this.currentPage$.value - 1);
    this.currentPage$.next(nextPage);
  }

  public setMaxPage(page: number): void {
    this.maxPage = page;
  }

  public setMinPage(page: number): void {
    this.minPage = page;
  }
}
