import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyConnectionsComponent } from './monthly-connections.component';

describe('MonthlyConnectionsComponent', () => {
  let component: MonthlyConnectionsComponent;
  let fixture: ComponentFixture<MonthlyConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyConnectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
