/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:查询form组件封装
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-df-select-form',
  templateUrl: './df-select-form.component.html',
  styleUrls: ['./df-select-form.component.scss']
})
export class DfSelectFormComponent implements OnInit {
  searchInfo = {
    senior: [
      {
        queryTitle: '创建日期',
        queryField: 'createTime',
        component: 'DatePicker', // 日期选择框
      },
      {
        queryTitle: '名称',
        queryField: 'officephone',
        component: 'Input', // 输入框
      },
      {
        queryTitle: '状态',
        queryField: 'isDeleted',
        component: 'Select-Multiple', // 多选框
        componentData: [{ value: '0', title: '未删除' }, { value: '1', title: '已删除' }],
      }]
  };
  constructor() { }

  ngOnInit() {

  }

}
