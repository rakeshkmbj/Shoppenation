import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCardTransactionsComponent } from './my-card-transactions.component';

describe('MyCardTransactionsComponent', () => {
  let component: MyCardTransactionsComponent;
  let fixture: ComponentFixture<MyCardTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCardTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCardTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
