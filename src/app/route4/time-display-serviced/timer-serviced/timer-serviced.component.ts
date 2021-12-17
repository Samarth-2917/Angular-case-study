import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
import { timerType } from 'src/app/route4/time-display-serviced/set-timer-serviced/set-timer-serviced.component';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-timer-serviced',
  templateUrl: './timer-serviced.component.html',
  styleUrls: ['./timer-serviced.component.css']
})
export class TimerServicedComponent implements OnInit {

  currentInstant: any;
  timeKeeper: any;
  constructor(private service: TimerService) { }

  ngOnInit(): void {
    this.service.timerData.pipe(distinctUntilChanged()).subscribe( data => {
      this.setCountdown(data);
    });
  }

  setCountdown(data: timerType) {
    if(!data.paused && !data.reset) {
      this.currentInstant = +data.timeInstant;
      this.timeKeeper = setInterval(() => {
        this.currentInstant = this.currentInstant - 1;

        if(this.currentInstant <= 0) {
          this.currentInstant = 0;
          this.service.emitCurrentTime(this.currentInstant);
          clearInterval(this.timeKeeper);
        }
      }, 1000);

    } else if(data.paused && !data.reset) {
      this.service.emitCurrentTime(this.currentInstant);
      clearInterval(this.timeKeeper);
    } else {
      this.currentInstant = 0;
      clearInterval(this.timeKeeper);
    }
  }

}
