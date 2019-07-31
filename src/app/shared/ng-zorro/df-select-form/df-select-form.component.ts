/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:查询form组件封装
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-df-select-form',
  templateUrl: './df-select-form.component.html',
  styleUrls: ['./df-select-form.component.scss']
})
export class DfSelectFormComponent implements OnInit {
  validateForm: FormGroup;
  controlArray: any[] = [];
  isCollapse = true;
  radioValue = 'A';
  selectedValue = 'Jack';
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfSelectedValue = [];
  demoValue = 3;
  dateFormat = 'yyyy/MM/dd';
  nzOptions = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
              isLeaf: true
            }
          ]
        },
        {
          value: 'ningbo',
          label: 'Ningbo',
          isLeaf: true
        }
      ]
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
              isLeaf: true
            }
          ]
        }
      ]
    }
  ];
  searchInfo = {
    senior: [
      {
        queryTitle: '日期',
        queryField: 'createTime',
        component: 'DatePicker', // 日期选择框
        show:true,
        colSpan:4,
      },
      {
        queryTitle: '输入框',
        queryField: 'officephone',
        component: 'Input', // 输入框
        show:true,
        colSpan:4
      },
      {
        queryTitle: '选择',
        queryField: 'select',
        component: 'Select',
        show:true,
        colSpan:4
      },
      {
        queryTitle: '复选',
        queryField: 'checkBox',
        component: 'CheckBox',
        show:true,
        colSpan:4
      },
      {
        queryTitle: '状态',
        queryField: 'isDeleted',
        component: 'select-Multiple', // 多选框
        componentData: [{ value: '0', title: '未删除' }, { value: '1', title: '已删除' }],
        show:true,
        colSpan:4
      },
      {
        queryTitle: '级联',
        queryField: 'cascader',
        component: 'Cascader', // 多选框
        componentData: [{ value: '0', title: '未删除' }, { value: '1', title: '已删除' }],
        show:true,
        colSpan:4
      },
      {
        queryTitle: '数字输入框',
        queryField: 'inputNumber',
        component: 'InputNumber', // 多选框
        show:true,
        colSpan:4
      },
      {
        queryTitle: '日期范围',
        queryField: 'dateRange',
        component: 'DateRange', // 多选框
        show:true,
        colSpan:6
      },
      {
        queryTitle: '单选',
        queryField: 'sex',
        component: 'Radio',
        show:true,
        colSpan:6
      },]
  };

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 6 : true;
    });
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  constructor(private fb: FormBuilder) {
    this.listOfOption = [{
      label:'测试区',
      value:'1'
    },{
      label:'测试区2',
      value:'12'
    }]
  }

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
