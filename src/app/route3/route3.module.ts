import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { Route3RoutingModule } from './route3-routing.module';
import { LogsComponent } from './time-display/logs/logs.component';
import { SetTimerComponent } from './time-display/set-timer/set-timer.component';
import { TimerComponent } from './time-display/timer/timer.component';
import { TimestampsComponent } from './time-display/timestamps/timestamps.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TimeDisplayComponent,
    LogsComponent,
    SetTimerComponent,
    TimerComponent,
    TimestampsComponent
  ],
  imports: [
    CommonModule,
    Route3RoutingModule,
    FormsModule
  ]
})
export class Route3Module { }
