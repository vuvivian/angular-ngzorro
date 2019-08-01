/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:查询form组件封装
 */
import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-df-select-form',
  templateUrl: './df-select-form.component.html',
  styleUrls: ['./df-select-form.component.scss']
})
export class DfSelectFormComponent implements OnInit {
  @Input() searchInfo;
  validateForm: FormGroup;
  controlArray: any[] = [];
  isCollapse = true;
  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 6 : true;
    });
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
    for (let i = 0; i < this.searchInfo.senior.length; i++) {
      this.validateForm.addControl(this.searchInfo.senior[i].queryField, new FormControl());
    }
  }
  onChanges(e) {
    console.log(e)
  }
}
