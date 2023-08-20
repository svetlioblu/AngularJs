import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoProceduresComponent } from './no-procedures.component';

describe('NoProceduresComponent', () => {
  let component: NoProceduresComponent;
  let fixture: ComponentFixture<NoProceduresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoProceduresComponent]
    });
    fixture = TestBed.createComponent(NoProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
