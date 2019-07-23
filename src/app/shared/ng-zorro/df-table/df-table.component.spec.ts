import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfTableComponent } from './df-table.component';

describe('DfTableComponent', () => {
  let component: DfTableComponent;
  let fixture: ComponentFixture<DfTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
