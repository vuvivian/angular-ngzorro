import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeTableTreeComponent } from './de-table-tree.component';

describe('DeTableTreeComponent', () => {
  let component: DeTableTreeComponent;
  let fixture: ComponentFixture<DeTableTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeTableTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeTableTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
