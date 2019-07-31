/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:弹框组件封装
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-df-modal',
  templateUrl: './df-modal.component.html',
  styleUrls: ['./df-modal.component.scss']
})

export class DfModalComponent implements OnInit {

  @Input() modalInfo;
  @Output() modelVisible = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  handleOk() {
    this.modelVisible.emit('false')
  }

  handleCancel() {
    this.modelVisible.emit('false')
  }

}
