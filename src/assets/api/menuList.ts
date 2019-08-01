/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/15
 * Description: 路由及菜单配置页
 */

export const MenuList = {
 menu: [{
   level: 1,
   key: 'dashboard',  // router中的path值
   title: '首页', // menu中的显示名称
   router: 'dashboard', // menu中的跳转路由
   icon: 'home', // menu中图标
   selected: true, // 是否选中
   disabled: false, // 是否可点击
 },{
   level: 1,
   key: 'example',  // router中的path值
   title: 'example', // menu中的显示名称
   icon: 'camera', // menu中图标
   open: false, // 是否展开
   selected: false, // 是否选中
   disabled: false, // 是否可点击
   children: [{
     level: 2,
     key: 'exampleTable',  // router中的path值
     title: '表格', // menu中的显示名称
     router: 'example/table', // menu中的跳转路由
     icon: 'carry-out', // menu中图标
     selected: false,
     disabled: false,
   }, {
     level: 2,
     key: 'exampleForm',  // router中的path值
     title: '表单', // menu中的显示名称
     router: 'example/form', // menu中的跳转路由
     icon: 'carry-out', // menu中图标
     selected: false,
     disabled: false,
   }, {
     "level": 2,
     "key": "examplePagination",
     "title": "分页",
     "router": "example/pagination",
     "icon": "carry-out",
     "selected": false,
     "disabled": false
   }, {
     "level": 2,
     "key": "exampleTree",
     "title": "树",
     "router": "example/tree",
     "icon": "carry-out",
     "selected": false,
     "disabled": false
   }]
 }],
 // others: [{
 //   key: 'login',
 //   title: '登录页',
 //   router: '/login',
 //   component: LoginComponent
 // }, {
 //   key: '404',
 //   title: '404',
 //   router: '/404',
 //   component: Code404Component
 // }]
};
