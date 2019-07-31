/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-df-auto-complete',
  templateUrl: './df-auto-complete.component.html',
  styleUrls: ['./df-auto-complete.component.scss']
})
export class DfAutoCompleteComponent implements OnInit {
  inputValue: string;
  options: Array<{ value: string; category: string; count: number }> = [];
  constructor() { }

  ngOnInit() {
  }

  onChange(value: string): void {
    this.options = new Array(this.getRandomInt(15, 5))
      .join('.')
      .split('.')
      .map((_item, idx) => ({
        value,
        category: `${value}${idx}`,
        count: this.getRandomInt(200, 100)
      }));
  }

  private getRandomInt(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
