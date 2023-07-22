import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresBoardComponent } from './procedures-board.component';

describe('ProceduresBoardComponent', () => {
  let component: ProceduresBoardComponent;
  let fixture: ComponentFixture<ProceduresBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProceduresBoardComponent]
    });
    fixture = TestBed.createComponent(ProceduresBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
