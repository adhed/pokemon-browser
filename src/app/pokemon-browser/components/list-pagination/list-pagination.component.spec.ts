import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaginationComponent } from './list-pagination.component';
import { IconButtonComponent } from '@app/common/components/icon-button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationService } from '@app/pokemon-browser/services';

describe('ListPaginationComponent', () => {
  let component: ListPaginationComponent;
  let fixture: ComponentFixture<ListPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPaginationComponent, IconButtonComponent ],
      imports: [ FontAwesomeModule ],
      providers: [ PaginationService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
