import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantByIdComponent } from './applicant-by-id.component';

describe('ApplicantByIdComponent', () => {
  let component: ApplicantByIdComponent;
  let fixture: ComponentFixture<ApplicantByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
