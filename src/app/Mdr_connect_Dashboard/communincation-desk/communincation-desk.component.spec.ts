import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunincationDeskComponent } from './communincation-desk.component';

describe('CommunincationDeskComponent', () => {
  let component: CommunincationDeskComponent;
  let fixture: ComponentFixture<CommunincationDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunincationDeskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunincationDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
