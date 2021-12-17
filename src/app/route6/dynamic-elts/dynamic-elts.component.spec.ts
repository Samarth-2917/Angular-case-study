import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicEltsComponent } from './dynamic-elts.component';

describe('DynamicEltsComponent', () => {
  let component: DynamicEltsComponent;
  let fixture: ComponentFixture<DynamicEltsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicEltsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicEltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
