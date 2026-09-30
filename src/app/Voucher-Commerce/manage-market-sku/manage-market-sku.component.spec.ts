import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMarketSkuComponent } from './manage-market-sku.component';

describe('ManageMarketSkuComponent', () => {
  let component: ManageMarketSkuComponent;
  let fixture: ComponentFixture<ManageMarketSkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMarketSkuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMarketSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
