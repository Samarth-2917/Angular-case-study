import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerServicedComponent } from './timer-serviced.component';

describe('TimerServicedComponent', () => {
  let component: TimerServicedComponent;
  let fixture: ComponentFixture<TimerServicedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerServicedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerServicedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
