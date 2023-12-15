import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateRegComponent } from './candidate-reg.component';

describe('CandidateRegComponent', () => {
  let component: CandidateRegComponent;
  let fixture: ComponentFixture<CandidateRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateRegComponent]
    });
    fixture = TestBed.createComponent(CandidateRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
