import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCustomerCardComponent } from './manage-customer-card.component';

describe('ManageCustomerCardComponent', () => {
  let component: ManageCustomerCardComponent;
  let fixture: ComponentFixture<ManageCustomerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCustomerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCustomerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
