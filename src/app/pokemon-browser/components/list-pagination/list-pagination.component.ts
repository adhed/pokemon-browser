import { Component, ChangeDetectionStrategy } from '@angular/core';
import { faArrowCircleLeft, faArrowCircleRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';
import { PaginationService } from '@app/pokemon-browser/services';

@Component({
  selector: 'app-list-pagination',
  templateUrl: './list-pagination.component.html',
  styleUrls: ['./list-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPaginationComponent {

  public readonly faArrowCircleLeft: IconDefinition = faArrowCircleLeft;
  public readonly faArrowCircleRight: IconDefinition = faArrowCircleRight;

  public get currentPage$(): BehaviorSubject<number> {
    return this.paginationService.currentPage$;
  }

  constructor(private readonly paginationService: PaginationService) { }

  public onPrevClick(): void {
    this.paginationService.goToPreviousPage();
  }

  public onNextClick(): void {
    this.paginationService.goToNextPage();
  }
}
