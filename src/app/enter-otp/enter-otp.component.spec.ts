import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterOTPComponent } from './enter-otp.component';

describe('EnterOTPComponent', () => {
  let component: EnterOTPComponent;
  let fixture: ComponentFixture<EnterOTPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterOTPComponent]
    });
    fixture = TestBed.createComponent(EnterOTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
