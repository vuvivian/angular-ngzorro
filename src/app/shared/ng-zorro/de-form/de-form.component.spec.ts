import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeFormComponent } from './de-form.component';

describe('DeFormComponent', () => {
  let component: DeFormComponent;
  let fixture: ComponentFixture<DeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
