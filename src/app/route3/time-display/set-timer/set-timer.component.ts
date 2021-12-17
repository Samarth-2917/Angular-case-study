import { EventEmitter, Component, Input, OnInit, Output, OnChanges } from '@angular/core';

export type timerType = {
  startCount: number;
  pauseCount: number;
  fullDate: string;
  timeInstant: string | number;
  paused: boolean;
}

@Component({
  selector: 'app-set-timer',
  templateUrl: './set-timer.component.html',
  styleUrls: ['./set-timer.component.css']
})
export class SetTimerComponent implements OnInit, OnChanges {
  @Input('timeInstant') timeInstant: any;
  @Output('timerData') timerData: EventEmitter<timerType> = new EventEmitter();
  @Output('timerReset') timerReset: EventEmitter<boolean> = new EventEmitter();

  timerStarted: boolean = false;
  startCount: number = 0;
  pauseCount: number = 0;
  timeKeeperArray: Array<string> = [];

  constructor() { }

  ngOnChanges() {
    if (this.timeInstant == '0') {
      this.timerStarted = false;
    }
  }

  ngOnInit(): void {
  }

  startTimer() {
    if (isNaN(this.timeInstant) || this.timeInstant <= 0) {
      alert('Please enter a number greater than 0');
      return;
    }

    this.timerStarted = !this.timerStarted;

    if (this.timerStarted) {
      //emit an object with start count, pause count, full timestamp and current time instant (so that timer and input are in sync)
      //create instances of date in blocks because timestamp changes on start and pause
      this.startCount += 1;
      let date = new Date().toString();
      this.timeKeeperArray.push('Timer started at: ' + this.timeInstant);
      this.timerData.emit(
        {
          startCount: this.startCount,
          pauseCount: this.pauseCount,
          fullDate: 'Started at: ' + date,
          timeInstant: this.timeInstant,
          paused: false,
        });

    } else {
      this.pauseCount += 1;
      let date = new Date().toString();
      this.timeKeeperArray.push('Timer paused at: ' + this.timeInstant);
      this.timerData.emit(
        {
          startCount: this.startCount,
          pauseCount: this.pauseCount,
          fullDate: 'Paused at: ' + date,
          timeInstant: this.timeInstant,
          paused: true,
        });
    }

  }

  resetTimer() {

    this.timerReset.emit(true);
    this.timeKeeperArray = [];
    this.startCount = 0;
    this.pauseCount = 0;
    this.timerStarted = false;
  }

}
