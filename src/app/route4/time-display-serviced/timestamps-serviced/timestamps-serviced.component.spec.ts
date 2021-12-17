import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimestampsServicedComponent } from './timestamps-serviced.component';

describe('TimestampsServicedComponent', () => {
  let component: TimestampsServicedComponent;
  let fixture: ComponentFixture<TimestampsServicedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimestampsServicedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimestampsServicedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
