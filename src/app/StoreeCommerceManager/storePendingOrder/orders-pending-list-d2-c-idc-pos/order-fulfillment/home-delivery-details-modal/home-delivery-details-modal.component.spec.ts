import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDeliveryDetailsModalComponent } from './home-delivery-details-modal.component';

describe('HomeDeliveryDetailsModalComponent', () => {
  let component: HomeDeliveryDetailsModalComponent;
  let fixture: ComponentFixture<HomeDeliveryDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDeliveryDetailsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDeliveryDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
