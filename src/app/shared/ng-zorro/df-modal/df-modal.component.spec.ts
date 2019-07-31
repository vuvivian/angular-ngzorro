import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfModalComponent } from './df-modal.component';

describe('DfModalComponent', () => {
  let component: DfModalComponent;
  let fixture: ComponentFixture<DfModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
