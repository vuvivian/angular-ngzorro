import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfPaginationComponent } from './df-pagination.component';

describe('DfPaginationComponent', () => {
  let component: DfPaginationComponent;
  let fixture: ComponentFixture<DfPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
