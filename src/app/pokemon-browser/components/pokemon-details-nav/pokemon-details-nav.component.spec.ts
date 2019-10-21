import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsNavComponent } from './pokemon-details-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterTestingModule } from '@angular/router/testing';
import { IconButtonComponent } from '@app/common/components/icon-button';
import { NavigationService } from '@app/pokemon-browser/services';

describe('PokemonDetailsNavComponent', () => {
  let component: PokemonDetailsNavComponent;
  let fixture: ComponentFixture<PokemonDetailsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailsNavComponent, IconButtonComponent ],
      providers: [ NavigationService ],
      imports: [ FontAwesomeModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
