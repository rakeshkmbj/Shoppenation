import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUsersManagementComponent } from './my-users-management.component';

describe('MyUsersManagementComponent', () => {
  let component: MyUsersManagementComponent;
  let fixture: ComponentFixture<MyUsersManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyUsersManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyUsersManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
