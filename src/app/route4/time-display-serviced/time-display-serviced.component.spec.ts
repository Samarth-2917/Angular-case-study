import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDisplayServicedComponent } from './time-display-serviced.component';

describe('TimeDisplayServicedComponent', () => {
  let component: TimeDisplayServicedComponent;
  let fixture: ComponentFixture<TimeDisplayServicedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeDisplayServicedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeDisplayServicedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
