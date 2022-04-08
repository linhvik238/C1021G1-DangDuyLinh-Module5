import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IRatingUnit} from '../irating-unit';

@Component({
  selector: 'app-rating-bar-component',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  constructor() { }
  value: number;
  ratingUnits: IRatingUnit[] = [
    {value: 1, active: false, color: 'chocolate'},
    {value: 2, active: false, color: 'chocolate'},
    {value: 3, active: false, color: 'chocolate'},
    {value: 4, active: false, color: 'chocolate'},
    {value: 5, active: false, color: 'chocolate'},
    {value: 6, active: false, color: 'chocolate'},
    {value: 7, active: false, color: 'chocolate'},
    {value: 8, active: false, color: 'chocolate'},
    {value: 9, active: false, color: 'chocolate'},
    {value: 10, active: false, color: 'chocolate'}
  ]

  @Output() excute = new EventEmitter();

  ngOnInit(): void {
  }

  rate(value) {
    this.value = value;
    for (const item of this.ratingUnits){
      if (item.value <= value){
        item.color = 'hotpink';
      } else {
        item.color = 'black';
      }
    }
  }
}
