import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsNavComponent } from './pokemon-details-nav.component';

describe('PokemonDetailsNavComponent', () => {
  let component: PokemonDetailsNavComponent;
  let fixture: ComponentFixture<PokemonDetailsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailsNavComponent ]
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
