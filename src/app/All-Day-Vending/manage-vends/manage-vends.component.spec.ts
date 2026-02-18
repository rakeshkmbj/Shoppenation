import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVendsComponent } from './manage-vends.component';

describe('ManageVendsComponent', () => {
  let component: ManageVendsComponent;
  let fixture: ComponentFixture<ManageVendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageVendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageVendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
