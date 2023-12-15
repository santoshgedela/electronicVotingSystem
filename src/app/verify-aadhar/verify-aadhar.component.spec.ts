import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyAadharComponent } from './verify-aadhar.component';

describe('VerifyAadharComponent', () => {
  let component: VerifyAadharComponent;
  let fixture: ComponentFixture<VerifyAadharComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyAadharComponent]
    });
    fixture = TestBed.createComponent(VerifyAadharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
