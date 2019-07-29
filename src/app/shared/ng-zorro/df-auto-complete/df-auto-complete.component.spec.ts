import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfAutoCompleteComponent } from './df-auto-complete.component';

describe('DfAutoCompleteComponent', () => {
  let component: DfAutoCompleteComponent;
  let fixture: ComponentFixture<DfAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfAutoCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
