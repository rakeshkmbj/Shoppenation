import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedexHcpComponent } from './medex-hcp.component';

describe('MedexHcpComponent', () => {
  let component: MedexHcpComponent;
  let fixture: ComponentFixture<MedexHcpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedexHcpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedexHcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
