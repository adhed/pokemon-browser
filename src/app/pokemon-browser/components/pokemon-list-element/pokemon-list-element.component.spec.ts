import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListElementComponent } from './pokemon-list-element.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('PokemonListElementComponent', () => {
  let component: PokemonListElementComponent;
  let fixture: ComponentFixture<PokemonListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListElementComponent ],
      imports: [ ReactiveFormsModule, FormsModule, RouterTestingModule ]
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
