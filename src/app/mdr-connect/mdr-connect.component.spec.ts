import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdrConnectComponent } from './mdr-connect.component';

describe('MdrConnectComponent', () => {
  let component: MdrConnectComponent;
  let fixture: ComponentFixture<MdrConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdrConnectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdrConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
