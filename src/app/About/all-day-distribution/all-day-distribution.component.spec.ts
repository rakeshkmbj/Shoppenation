import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDayDistributionComponent } from './all-day-distribution.component';

describe('AllDayDistributionComponent', () => {
  let component: AllDayDistributionComponent;
  let fixture: ComponentFixture<AllDayDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDayDistributionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDayDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
