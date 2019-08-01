/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:查询form组件封装
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-df-select-form',
  templateUrl: './df-select-form.component.html',
  styleUrls: ['./df-select-form.component.scss']
})
export class DfSelectFormComponent implements OnInit {
  @Input() searchInfo;
  @Output() reset = new EventEmitter<any>();
  @Output() getSubmit = new EventEmitter<object>();
  @Output() getChange = new EventEmitter<any>();

  validateForm: FormGroup;
  controlArray: any[] = [];
  isCollapse = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
    for (let i = 0; i < this.searchInfo.senior.length; i++) {
      this.validateForm.addControl(
        this.searchInfo.senior[i].queryField,
        new FormControl(
          this.searchInfo.senior[i].defaultValue,
          this.searchInfo.senior[i].required?Validators.required:null
        )
      );
    }
  }

  /* 提交表单 */
  submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      console.log('this.validateForm.value', this.validateForm.value);
      console.log('成功', this.validateForm);
      debugger;
      this.getSubmit.emit(this.validateForm.value);
    } else {
      console.log('失败', this.validateForm);
    }
  }

  /* 重置表单 */
  resetForm(): void {
    this.validateForm.reset();
    this.reset.emit()
  }

  /* FormItem 变更事件 */
  requiredChange(required: boolean): void {
    this.getChange.emit(required);
  }

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 8 : true;
    });
  }
}
