/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginGuard} from './utils/router-guard/login-guard';
import {MenuList} from './configs/menuList';

/* page */
import {Code404Component} from './components/code404/code404.component';
import {LoginComponent} from './templates/login/login.component';
import {LayoutComponent} from './components/layout/layout.component';

/*
const resultData = MenuList.menu.forEach((r) => {
  const route = l => {
    const a = {
      path:l.key,
      component:l.component
    };
    console.log('a', a);
    return a;
  }
  return  r.component ? route(r) : r.children.map(r => route(r));
});
*/
const route = [];

for(let i = 0; i < MenuList.menu.length; i++) {
  if (MenuList.menu[i].component) {
    route.push({
      path: MenuList.menu[i].router,
      component: MenuList.menu[i].component
    });
  } else {
    MenuList.menu[i].children.forEach((item) => {
      route.push({
        path: item.router,
        component: item.component
      });
    });
  }
}

console.log('route', route);

const routes: Routes = [
  {path: '', redirectTo: '/app/dashboard', pathMatch: 'full'},
  {path: 'app', component: LayoutComponent, children: route, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent},
  {path: '404', component: Code404Component},
  {path: '**', redirectTo: '/404', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
