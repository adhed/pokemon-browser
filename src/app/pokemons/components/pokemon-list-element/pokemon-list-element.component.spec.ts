import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListElementComponent } from './pokemon-list-element.component';

describe('PokemonListElementComponent', () => {
  let component: PokemonListElementComponent;
  let fixture: ComponentFixture<PokemonListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
