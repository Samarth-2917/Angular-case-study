import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route4RoutingModule } from './route4-routing.module';
import { TimeDisplayServicedComponent } from './time-display-serviced/time-display-serviced.component';
import { SetTimerServicedComponent } from './time-display-serviced/set-timer-serviced/set-timer-serviced.component';
import { TimestampsServicedComponent } from './time-display-serviced/timestamps-serviced/timestamps-serviced.component';
import { LogsServicedComponent } from './time-display-serviced/logs-serviced/logs-serviced.component';
import { TimerServicedComponent } from './time-display-serviced/timer-serviced/timer-serviced.component';
import { FormsModule } from '@angular/forms';
import { TimerService } from '../services/timer.service';


@NgModule({
  declarations: [
    TimeDisplayServicedComponent,
    SetTimerServicedComponent,
    TimestampsServicedComponent,
    LogsServicedComponent,
    TimerServicedComponent,
  ],
  imports: [
    CommonModule,
    Route4RoutingModule,
    FormsModule,
  ],
  providers: [TimerService]

})
export class Route4Module { }
