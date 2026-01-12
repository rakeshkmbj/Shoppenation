import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdevertiserDashboardComponent } from './adevertiser-dashboard.component';

describe('AdevertiserDashboardComponent', () => {
  let component: AdevertiserDashboardComponent;
  let fixture: ComponentFixture<AdevertiserDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdevertiserDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdevertiserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
