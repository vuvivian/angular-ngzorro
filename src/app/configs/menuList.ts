/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/15
 * Description: 路由及菜单配置页
 */
import {DashboardComponent} from '../templates/dashboard/dashboard.component';
import {LoginComponent} from '../templates/login/login.component';
import {Code404Component} from '../components/code404/code404.component';
import {TableComponent} from '../templates/examples/table/table.component';
import {FormComponent} from '../templates/examples/form/form.component';

export const MenuList = {
 menu: [{
   level: 2,
   key: 'dashboard',  // router中的path值
   title: '首页', // menu中的显示名称
   router: 'dashboard', // menu中的跳转路由
   icon: 'home', // menu中图标
   component: DashboardComponent, // 组件
   open: true, // 是否展开
   selected: true, // 是否选中
   disabled: false, // 是否可点击
 }, {
   level: 1,
   key: 'database',  // router中的path值
   title: '结构', // menu中的显示名称
   icon: 'home', // menu中图标
   open: false,
   selected: false,
   disabled: false,
   children: [{
     level: 2,
     key: 'model',  // router中的path值
     title: '模型', // menu中的显示名称
     router: 'database/model', // menu中的跳转路由
     icon: 'home', // menu中图标
     component: TableComponent, // 组件
     selected: false,
     disabled: false,
   }, {
     level: 2,
     key: 'field',  // router中的path值
     title: '字段', // menu中的显示名称
     router: 'database/field', // menu中的跳转路由
     icon: 'home', // menu中图标
     component: TableComponent, // 组件
     selected: false,
     disabled: false,
   }]
 }, {
   level: 1,
   key: 'demo',  // router中的path值
   title: 'Demo', // menu中的显示名称
   icon: 'home', // menu中图标
   open: false,
   selected: false,
   disabled: false,
   children: [{
     level: 2,
     key: 'table',  // router中的path值
     title: '表格', // menu中的显示名称
     router: 'demo/table', // menu中的跳转路由
     icon: 'home', // menu中图标
     component: TableComponent, // 组件
     selected: false,
     disabled: false,
   }, {
     level: 2,
     key: 'demo/form',  // router中的path值
     title: '表单', // menu中的显示名称
     router: 'demo/form', // menu中的跳转路由
     icon: 'home', // menu中图标
     component: FormComponent, // 组件
     selected: false,
     disabled: false,
   }, {
     level: 2,
     key: 'grid',  // router中的path值
     title: 'grid', // menu中的显示名称
     router: 'demo/grid', // menu中的跳转路由
     icon: 'home', // menu中图标
     component: FormComponent, // 组件
     selected: false,
     disabled: false,
   }]
 }],
 others: [{
   key: 'login',
   title: '登录页',
   router: '/login',
   component: LoginComponent
 }, {
   key: '404',
   title: '404',
   router: '/404',
   component: Code404Component
 }]
};
