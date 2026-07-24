import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAccessAndPosManagementComponent } from './card-access-and-pos-management.component';

describe('CardAccessAndPosManagementComponent', () => {
  let component: CardAccessAndPosManagementComponent;
  let fixture: ComponentFixture<CardAccessAndPosManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAccessAndPosManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAccessAndPosManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
