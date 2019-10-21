import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListComponent } from './pokemon-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PokemonListElementComponent } from '../pokemon-list-element';
import { ListPaginationComponent } from '../list-pagination/list-pagination.component';
import { RouterTestingModule } from '@angular/router/testing';
import { IconButtonComponent } from '@app/common/components/icon-button';
import { PokemonListService, PokemonService, PaginationService } from '@app/pokemon-browser/services';
import { ApiService, mockedApiService } from '@app/common/services';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconButtonComponent, PokemonListComponent, PokemonListElementComponent, ListPaginationComponent ],
      imports: [ FontAwesomeModule, RouterTestingModule ],
      providers: [ PokemonListService, PokemonService, { provide: ApiService, useValue: mockedApiService }, PaginationService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
