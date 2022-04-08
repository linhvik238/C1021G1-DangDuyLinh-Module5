import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-execute-rating-bar',
  templateUrl: './execute-rating-bar.component.html',
  styleUrls: ['./execute-rating-bar.component.css']
})
export class ExecuteRatingBarComponent implements OnInit {

  @Input() value = 0;
  rate(value){
    this.value = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
