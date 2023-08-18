import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureNewComponent } from './procedure-new.component';

describe('ProcedureNewComponent', () => {
  let component: ProcedureNewComponent;
  let fixture: ComponentFixture<ProcedureNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcedureNewComponent]
    });
    fixture = TestBed.createComponent(ProcedureNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
