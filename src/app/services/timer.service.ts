import { Subject } from "rxjs";
import { timerType } from "../route4/time-display-serviced/set-timer-serviced/set-timer-serviced.component";

export class TimerService{
    timerData: Subject<timerType> = new Subject();
    currentTimer: Subject<number | string> = new Subject();


    emitTimerData(data: timerType) {
        this.timerData.next(data);
    }

    emitCurrentTime(data: number | string) {
        this.currentTimer.next(data);
    }
}