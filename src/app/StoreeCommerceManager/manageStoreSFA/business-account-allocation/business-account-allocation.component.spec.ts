import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAccountAllocationComponent } from './business-account-allocation.component';

describe('BusinessAccountAllocationComponent', () => {
  let component: BusinessAccountAllocationComponent;
  let fixture: ComponentFixture<BusinessAccountAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessAccountAllocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessAccountAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
