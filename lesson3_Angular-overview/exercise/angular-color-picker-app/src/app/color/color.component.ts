import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color: string;
  para: string;

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(value: string) {
    this.color = value;
    console.log(value);
    console.log(this.color);
  }
}
