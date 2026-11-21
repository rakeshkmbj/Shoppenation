import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCampaignsVouchersComponent } from './manage-campaigns-vouchers.component';

describe('ManageCampaignsVouchersComponent', () => {
  let component: ManageCampaignsVouchersComponent;
  let fixture: ComponentFixture<ManageCampaignsVouchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCampaignsVouchersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCampaignsVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
