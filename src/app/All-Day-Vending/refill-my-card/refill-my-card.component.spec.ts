import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefillMyCardComponent } from './refill-my-card.component';

describe('RefillMyCardComponent', () => {
  let component: RefillMyCardComponent;
  let fixture: ComponentFixture<RefillMyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefillMyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefillMyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
