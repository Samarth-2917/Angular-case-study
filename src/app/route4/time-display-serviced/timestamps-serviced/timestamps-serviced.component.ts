import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
import { TimerService } from 'src/app/services/timer.service';
import { timerType } from '../set-timer-serviced/set-timer-serviced.component';

@Component({
  selector: 'app-timestamps-serviced',
  templateUrl: './timestamps-serviced.component.html',
  styleUrls: ['./timestamps-serviced.component.css']
})
export class TimestampsServicedComponent implements OnInit {

  timeStamps: Array<string> = [];
  constructor(private service: TimerService) { }

  ngOnInit(): void {
    this.service.timerData.pipe(distinctUntilChanged()).subscribe( (resp: timerType) => {
      if(resp.fullDate !== '') {
        this.timeStamps.push(resp.fullDate);

      } else {
        this.timeStamps = [];
      }
      
    });
  }

}
