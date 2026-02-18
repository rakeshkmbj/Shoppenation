import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDayVendingComponent } from './all-day-vending.component';

describe('AllDayVendingComponent', () => {
  let component: AllDayVendingComponent;
  let fixture: ComponentFixture<AllDayVendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDayVendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDayVendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
