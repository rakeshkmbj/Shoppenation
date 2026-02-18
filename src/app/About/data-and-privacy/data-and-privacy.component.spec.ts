import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAndPrivacyComponent } from './data-and-privacy.component';

describe('DataAndPrivacyComponent', () => {
  let component: DataAndPrivacyComponent;
  let fixture: ComponentFixture<DataAndPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAndPrivacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAndPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
