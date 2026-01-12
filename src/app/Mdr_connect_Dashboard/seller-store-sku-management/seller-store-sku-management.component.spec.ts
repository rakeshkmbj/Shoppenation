import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerStoreSkuManagementComponent } from './seller-store-sku-management.component';

describe('SellerStoreSkuManagementComponent', () => {
  let component: SellerStoreSkuManagementComponent;
  let fixture: ComponentFixture<SellerStoreSkuManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerStoreSkuManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerStoreSkuManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
