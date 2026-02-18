import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayablesReceivablesComponent } from './payables-receivables.component';

describe('PayablesReceivablesComponent', () => {
  let component: PayablesReceivablesComponent;
  let fixture: ComponentFixture<PayablesReceivablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayablesReceivablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayablesReceivablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
