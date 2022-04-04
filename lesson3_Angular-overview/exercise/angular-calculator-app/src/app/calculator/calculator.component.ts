import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    firstOperand;
    secondOperand;
    operator;
    result = 0;

  addition() {
    this.operator = '+';
  }

  subtraction() {
    this.operator = '-';
  }

  multiplication() {
    this.operator = '*';
  }

  division() {
    this.operator = '/';
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.result = this.firstOperand + this.secondOperand;
        break;
      case '-':
        this.result = this.firstOperand - this.secondOperand;
        break;
      case '*':
        this.result = this.firstOperand * this.secondOperand;
        break;
      case '/':
        this.result = this.firstOperand / this.secondOperand;
        break;
    }

  }
  constructor() { }

  ngOnInit(): void {
  }

}
