import { Component, OnInit } from '@angular/core';
import { timerType } from './set-timer/set-timer.component';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnInit {
  currentTimeInstant: any;
  timestampsArray: Array<string> = [];
  timerKeeper: any;

  startCount: number = 0;
  pauseCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  timerStartedOrPaused(event: timerType) {
    if(!event.paused) {
      this.currentTimeInstant = event.timeInstant;
      this.startCount = event.startCount;

      this.timerKeeper = setInterval(() => {
        let val = typeof event.timeInstant == 'string' ? parseInt(event.timeInstant) : event.timeInstant;
        this.currentTimeInstant -= 1;

        if(this.currentTimeInstant <= 0) {
          this.currentTimeInstant = 0;
          clearInterval(this.timerKeeper);
        }
      }, 1000)
    } else {
      this.pauseCount = event.pauseCount;
      clearInterval(this.timerKeeper);
      
    }

    this.timestampsArray.push(event.fullDate);
  }

  onTimerReset(event: boolean) {
    if(event) {
      this.currentTimeInstant = 0;
      this.startCount = 0;
      this.pauseCount = 0;
      this.timestampsArray = [];
      clearInterval(this.timerKeeper);
    }
  }

}
