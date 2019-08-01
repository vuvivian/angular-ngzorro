/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/31
 * Description:
 */
import { Component, OnInit } from '@angular/core';
import {DfModal} from "../../../interface/dfModal";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  modalInfo: DfModal = {
    isVisible: false,
    title: '测试'
  };
  searchInfo = {
    senior: [
      {
        queryTitle: '日期',
        queryField: 'createTime',
        component: 'DatePicker', // 日期选择框
      },
      {
        queryTitle: '输入框',
        queryField: 'officephone',
        component: 'Input', // 输入框
      },
      {
        queryTitle: '选择',
        queryField: 'select',
        component: 'Select',
        componentData: [{ value: '0', title: '未删除',disabled:true}, { value: '1', title: '已删除' }],
      },
      {
        queryTitle: '复选',
        queryField: 'checkBox',
        component: 'CheckBox',
        componentData: [{ value: 'app', title: 'app',disabled:true}, { value: 'pc', title: 'pc' }],
      },
      {
        queryTitle: '多选',
        queryField: 'isDeleted',
        component: 'Select', // 多选框
        mode:'multiple',
        componentData: [{ value: '0', title: '未删除' }, { value: '1', title: '已删除' }],
      },
      {
        queryTitle: '级联',
        queryField: 'cascader',
        component: 'Cascader', // 多选框
        componentData: [ {
          value: 'zhejiang',
          label: '浙江',
          children: [
            {
              value: 'hangzhou',
              label: '杭州',
              children: [
                {
                  value: 'xihu',
                  label: '西湖',
                  isLeaf: true
                }
              ]
            },
            {
              value: 'ningbo',
              label: '宁波',
              isLeaf: true
            }
          ]
        },
          {
            value: 'jiangsu',
            label: '江苏',
            children: [
              {
                value: 'nanjing',
                label: '南京',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: '中华门',
                    isLeaf: true
                  }
                ]
              }
            ]
          }],
      },
      {
        queryTitle: '数字',
        queryField: 'inputNumber',
        component: 'InputNumber', // 多选框
      },
      {
        queryTitle: '期间',
        queryField: 'dateRange',
        component: 'DateRange', // 多选框
      },
      {
        queryTitle: '单选',
        queryField: 'sex',
        component: 'Radio',
        componentData: [{ value: 'boy', title: '男' }, { value: 'girl', title: '女' }],
      },]
  };
  constructor() { }

  ngOnInit() {
  }

}
