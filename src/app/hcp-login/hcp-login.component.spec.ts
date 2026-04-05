import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcpLoginComponent } from './hcp-login.component';

describe('HcpLoginComponent', () => {
  let component: HcpLoginComponent;
  let fixture: ComponentFixture<HcpLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcpLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HcpLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
