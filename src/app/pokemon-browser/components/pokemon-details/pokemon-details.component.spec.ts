import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsComponent } from './pokemon-details.component';
import { PokemonDetailsNavComponent } from '../pokemon-details-nav/pokemon-details-nav.component';
import { PokemonStatsComponent } from '../pokemon-stats/pokemon-stats.component';
import { IconButtonComponent } from '@app/common/components/icon-button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterTestingModule } from '@angular/router/testing';
import { PokemonService, NavigationService } from '@app/pokemon-browser/services';
import { ApiService, mockedApiService } from '@app/common/services';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PokemonDetailsComponent, PokemonDetailsNavComponent, PokemonStatsComponent, IconButtonComponent,
      ],
      providers: [ PokemonService, { provide: ApiService, useValue: mockedApiService }, NavigationService ],
      imports: [ FontAwesomeModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
