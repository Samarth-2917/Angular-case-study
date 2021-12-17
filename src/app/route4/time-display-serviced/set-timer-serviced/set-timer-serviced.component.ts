import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
import { TimerService } from 'src/app/services/timer.service';

export type timerType = {
  startCount: number;
  pauseCount: number;
  fullDate: string;
  timeInstant: string | number;
  paused: boolean;
  reset: boolean;
}

@Component({
  selector: 'app-set-timer-serviced',
  templateUrl: './set-timer-serviced.component.html',
  styleUrls: ['./set-timer-serviced.component.css']
})
export class SetTimerServicedComponent implements OnInit {

  timeInstant: any;
  timerStarted: boolean = false;
  startCount: number = 0;
  pauseCount: number = 0;
  timeKeeperArray: Array<string> = [];

  constructor(private service: TimerService) { }

  ngOnInit(): void {
    this.service.currentTimer.pipe(distinctUntilChanged()).subscribe( ( data: number | string) => {
      if(data <= 0) {
        this.timeInstant = 0;
        this.timerStarted = false;
      } else {
        this.timeInstant = data;
      }
      
    });
  }

  startTimer() {
    if(isNaN(this.timeInstant) || this.timeInstant <= 0) {
      alert('Please enter a numerical value greater than 0');
      return;
    }

    this.timerStarted = !this.timerStarted;

    if(this.timerStarted) {
      this.startCount+=1;
      let date = new Date().toString();

      let data: timerType = {
        startCount: this.startCount,
        pauseCount: this.pauseCount,
        fullDate: 'Timer started at: ' + date,
        timeInstant: this.timeInstant,
        paused: false,
        reset: false
      }

      this.service.emitTimerData(data);
      this.timeKeeperArray.push('Started at: ' + this.timeInstant);

    } else {
      this.pauseCount+=1;
      let date = new Date();

      let data: timerType = {
        startCount: this.startCount,
        pauseCount: this.pauseCount,
        fullDate: 'Timer paused at: ' + date,
        timeInstant: this.timeInstant,
        paused: true,
        reset: false
      }

      this.service.emitTimerData(data);
      this.timeKeeperArray.push('Paused at: ' + this.timeInstant);
    }
  }

  resetTimer() {
    this.timerStarted = false;
    this.timeInstant = 0;
    this.startCount = 0;
    this.pauseCount = 0;
    this.timeKeeperArray = [];

    let data: timerType = {
      startCount: 0,
      pauseCount: 0,
      fullDate: '',
      timeInstant: 0,
      paused: false,
      reset: true
    }

    this.service.emitTimerData(data);

  }

}
