import { Component, OnInit } from '@angular/core';
import {MenuList} from '../../../configs/menuList';
import {LoginGuard} from '../../../utils/router-guard/login-guard';
import {DashboardComponent} from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  MenuList2 = MenuList.menu;

  Menu = [{
    key: 'first01',  // router中的path值
    title: '一级菜单01', // menu中的显示名称
    icon: 'lock', // menu中图标
    children: [{
      key: 'dashboard',  // router中的path值
      title: '首页', // menu中的显示名称
      router: '/app/dashboard', // menu中的跳转路由
      icon: 'home', // menu中图标
      component: DashboardComponent, // 组件
    }, {
      key: 'dashboard',  // router中的path值
      title: '首页2', // menu中的显示名称
      router: '/app/dashboard', // menu中的跳转路由
      icon: 'home', // menu中图标
      component: DashboardComponent, // 组件
    }]
  }, {
    key: 'first02',  // router中的path值
    title: '一级菜单02', // menu中的显示名称
    icon: 'lock', // menu中图标
    children: [{
      key: 'table',  // router中的path值
      title: '表格', // menu中的显示名称
      router: '/first02/table', // menu中的跳转路由
      icon: 'home', // menu中图标
      component: DashboardComponent, // 组件
    }, {
      key: 'table',  // router中的path值
      title: '表格2', // menu中的显示名称
      router: '/first02/table', // menu中的跳转路由
      icon: 'home', // menu中图标
      component: DashboardComponent, // 组件
    }]
  }];
  constructor() {}


  ngOnInit() {
  }

}
