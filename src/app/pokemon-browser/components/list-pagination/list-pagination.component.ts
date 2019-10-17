import { Component, OnInit } from '@angular/core';
import { PokemonListService } from '@app/pokemon-browser/services';

@Component({
  selector: 'app-list-pagination',
  templateUrl: './list-pagination.component.html',
  styleUrls: ['./list-pagination.component.scss']
})
export class ListPaginationComponent implements OnInit {

  constructor(private readonly listService: PokemonListService) { }

  ngOnInit() {
  }

  public onPrevClick(): void {
    this.listService.
  }

  public onNextClick(): void {

  }
}
