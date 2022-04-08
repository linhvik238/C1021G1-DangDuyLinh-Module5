import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  timeLeft: number = 238;
  interval;
  constructor() { }

  ngOnInit(): void {
  }
  startTimer(){
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 238;
      }
    }, 1000);
  }

  pauseTime(){
    clearInterval(this.interval);
  }

}
