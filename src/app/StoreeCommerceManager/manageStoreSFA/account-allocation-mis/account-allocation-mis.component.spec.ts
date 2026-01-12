import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAllocationMISComponent } from './account-allocation-mis.component';

describe('AccountAllocationMISComponent', () => {
  let component: AccountAllocationMISComponent;
  let fixture: ComponentFixture<AccountAllocationMISComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountAllocationMISComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountAllocationMISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
