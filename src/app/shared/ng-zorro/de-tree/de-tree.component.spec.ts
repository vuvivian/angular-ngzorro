import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeTreeComponent } from './de-tree.component';

describe('DeTreeComponent', () => {
  let component: DeTreeComponent;
  let fixture: ComponentFixture<DeTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
