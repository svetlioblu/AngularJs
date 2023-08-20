import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoExistsComponent } from './no-exists.component';

describe('NoExistsComponent', () => {
  let component: NoExistsComponent;
  let fixture: ComponentFixture<NoExistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoExistsComponent]
    });
    fixture = TestBed.createComponent(NoExistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
