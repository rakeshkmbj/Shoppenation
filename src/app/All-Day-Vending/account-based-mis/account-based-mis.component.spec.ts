import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBasedMISComponent } from './account-based-mis.component';

describe('AccountBasedMISComponent', () => {
  let component: AccountBasedMISComponent;
  let fixture: ComponentFixture<AccountBasedMISComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountBasedMISComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountBasedMISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
