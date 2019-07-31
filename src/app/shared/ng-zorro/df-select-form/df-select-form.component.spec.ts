import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfSelectFormComponent } from './df-select-form.component';

describe('DfSelectFormComponent', () => {
  let component: DfSelectFormComponent;
  let fixture: ComponentFixture<DfSelectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfSelectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfSelectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
