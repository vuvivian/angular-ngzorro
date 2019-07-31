/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:table组件封装
 */
import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-df-table',
  templateUrl: './df-table.component.html',
  styleUrls: ['./df-table.component.scss']
})
export class DfTableComponent implements OnInit, OnChanges {
  isAllDataChecked: boolean;
  dataChecked: checkedItem[];
  @Input() tableInfo;
  @Output() checked = new EventEmitter<object>();
  @Output() checkedSingle = new EventEmitter<object>();
  @Output() delete = new EventEmitter<object>();
  @Output() editData = new EventEmitter<object>();
  @Output() page = new EventEmitter<number>();

  constructor() {
    this.isAllDataChecked = false;
  }

  ngOnChanges() {
    if (this.tableInfo.checked || this.tableInfo.checkedSingle) {
      this.dataChecked = [];
      const totalNum = this.tableInfo.total;
      for (let i = 0; i < totalNum; i++) {
        this.dataChecked.push({checked: false, id: i});
      }
    }
  }

  ngOnInit(): void {}

  // 是否全选
  checkAll(): void {
    if(this.isAllDataChecked ){
      this.dataChecked.forEach(e => {
        e.checked = true;
      });
    } else {
      this.dataChecked.forEach(e => {
        e.checked = false;
      });
    }
    this.checkEmit();
  }

  // 每行的复选框状态变更
  refreshStatus(i): void {
    this.isAllDataChecked = this.dataChecked.every(e => e.checked === true);
    this.checkEmit();
  }

  // 单选框状态变更
  refreSingle(i) {
    this.dataChecked.filter(e => e.id !== i)
      .forEach(_e => _e.checked = false);
    this.checkedSingle.emit(i);
  }

  checkEmit() {
    const ids = [];
    if (this.dataChecked.some(e => e.checked) === true) {
      this.dataChecked.filter(e => e.checked === true)
        .forEach(_e => {
          ids.push(_e.id);
        });
    }
    this.checked.emit(ids);
  }

  // 编辑
  edit(data) {
    this.editData.emit(data);
  }

  // 删除确认
  confirm(e) {
    this.delete.emit(e);
  }

  cancel() {}
}

export interface checkedItem {
  checked?: boolean;
  id?: any
}
