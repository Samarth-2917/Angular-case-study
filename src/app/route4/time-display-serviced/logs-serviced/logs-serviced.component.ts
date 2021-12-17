import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
import { TimerService } from 'src/app/services/timer.service';
import { timerType } from '../set-timer-serviced/set-timer-serviced.component';

@Component({
  selector: 'app-logs-serviced',
  templateUrl: './logs-serviced.component.html',
  styleUrls: ['./logs-serviced.component.css']
})
export class LogsServicedComponent implements OnInit {
  startCount: number = 0;
  pauseCount: number = 0;
  constructor(private service: TimerService) { }

  ngOnInit(): void {
    this.service.timerData.pipe(distinctUntilChanged()).subscribe( (resp: timerType) => {
      this.startCount = resp.startCount;
      this.pauseCount = resp.pauseCount;
    });
  }

}
