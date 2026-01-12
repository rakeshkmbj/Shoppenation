import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationDeactivationComponent } from './activation-deactivation.component';

describe('ActivationDeactivationComponent', () => {
  let component: ActivationDeactivationComponent;
  let fixture: ComponentFixture<ActivationDeactivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivationDeactivationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivationDeactivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
