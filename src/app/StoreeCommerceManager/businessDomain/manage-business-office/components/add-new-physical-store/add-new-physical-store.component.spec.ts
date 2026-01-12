import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPhysicalStoreComponent } from './add-new-physical-store.component';

describe('AddNewPhysicalStoreComponent', () => {
  let component: AddNewPhysicalStoreComponent;
  let fixture: ComponentFixture<AddNewPhysicalStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewPhysicalStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewPhysicalStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
