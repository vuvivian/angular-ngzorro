/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/29
 * Description:table组件封装
 */
import { Component, OnInit } from '@angular/core';
import {DfTable} from "../../../interface/dfTable";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  switchTitle = true;
  switchFooter = true;
  switchBorder = true;
  switchLoading = false;
  sizeValue = 'default';
  switchChecked = true;
  switchCheckedSingle = false;
  switchPagination = true;
  switchOperation = true;

  tableInfo: DfTable = {
    column:[
      {
      key:"name",
      title:"姓名",
        showFilter:true,
    },{
      key:"age",
      title:"年龄",
        showSort:true,
    },{
      key:"sex",
      title:"性别"
    }],
    dataSource:[
      {
      name:"哆啦A梦",
      age:10,
      sex:'Boy'
    },{
      name:"小魔仙",
      age:10,
      sex:'Girl'
    },{
      name:"米奇",
      age:1,
      sex:'Boy'
    }],
    total:3,
    pagination:true,
    pageParams:{
      pageIndex:1,
      pageSize:5,
      total:3
    },
    title: '此处是个标题',
    footer: '此处是个尾部',
    bordered: true,
    loading: false,
    size: 'default',
    // checkedSingle:true,
    checked:true,
    showAction: true
  };

  ngOnInit(): void {}

  clickSwitch(type): void {
    switch (type) {
      case 'title':
        if (this.switchTitle) {
          this.tableInfo.title = '此处是个标题'
        } else {
          delete this.tableInfo.title
        };
        break;
      case 'footer':
        if (this.switchFooter) {
          this.tableInfo.footer = '此处是个footer'
        } else {
          delete this.tableInfo.footer
        };
        break;
      case 'bordered':
        if (this.switchBorder) {
          this.tableInfo.bordered = true
        } else {
          delete this.tableInfo.bordered
        };
        break;
      case 'loading':
        this.tableInfo.loading = this.switchLoading;
        break;
      case 'checked':
        if (this.switchChecked) {
          this.tableInfo.checked = true;
          this.tableInfo.checkedSingle = false
        } else {
          this.tableInfo.checked = false;
        };
        break;
      case 'checkedSingle':
        if (this.switchChecked) {
          this.tableInfo.checked = false;
          this.tableInfo.checkedSingle = true
        } else {
          this.tableInfo.checkedSingle = false;
        };
        break;
      case 'pagination':
        this.tableInfo.pagination = this.switchPagination;
        break;
      case 'operation':
        this.tableInfo.showAction = this.switchOperation;
      default:
        break;
    }
  }

  changeSize(e):void {
    this.tableInfo.size = e
  }
  getCheckedId(e): void{
    console.log(e)
  }
  getPage(e): void{
    console.log(e)
  }
  checkedSingle(e): void{
    console.log(e)
  }
  delete(e): void{
    console.log(e)
  }
  edit(e): void{
    console.log(e)
  }
}
