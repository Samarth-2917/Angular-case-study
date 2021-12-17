import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTimerServicedComponent } from './set-timer-serviced.component';

describe('SetTimerServicedComponent', () => {
  let component: SetTimerServicedComponent;
  let fixture: ComponentFixture<SetTimerServicedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetTimerServicedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTimerServicedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
