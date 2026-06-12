import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingAndTMComponent } from './pricing-and-tm.component';

describe('PricingAndTMComponent', () => {
  let component: PricingAndTMComponent;
  let fixture: ComponentFixture<PricingAndTMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingAndTMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingAndTMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
