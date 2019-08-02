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
          this.searchInfo.senior[i].required?Validators.required:null,
        )
      );
    }
  }

  /* 表单验证 */
  confirmationValidator =(control: FormControl): { [s: string]: boolean }  =>{
    console.log('control',control);
    return {}
  };

  /* 提交表单 */
  submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.getSubmit.emit(this.validateForm.value);
    }
  }

  /* 重置表单 */
  resetForm(): void {
    this.validateForm.reset();
    this.reset.emit()
  }

  /* FormItem 变更事件 */
  requiredChange(field:string, required: boolean): void {
    console.log(field, required);
    const param = {};
      param[field] = required;
    this.getChange.emit(param);
  }

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 8 : true;
    });
  }
}
