import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonBrowserComponent } from './pokemon-browser.component';
import { PokemonFormComponent } from './components';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('PokemonBrowserComponent', () => {
  let component: PokemonBrowserComponent;
  let fixture: ComponentFixture<PokemonBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonBrowserComponent, PokemonFormComponent ],
      imports: [ RouterTestingModule, ReactiveFormsModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
