import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantDateFilterComponent } from './applicant-date-filter.component';

describe('ApplicantDateFilterComponent', () => {
  let component: ApplicantDateFilterComponent;
  let fixture: ComponentFixture<ApplicantDateFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantDateFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantDateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
