import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsServicedComponent } from './logs-serviced.component';

describe('LogsServicedComponent', () => {
  let component: LogsServicedComponent;
  let fixture: ComponentFixture<LogsServicedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsServicedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsServicedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
