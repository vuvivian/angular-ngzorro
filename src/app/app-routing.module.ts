/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuList} from './configs/menuList';
import {PageModule} from "./page/page.module";

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
 /* {path: '', redirectTo: '/app/dashboard', pathMatch: 'full'},
  {path: 'app', component: LayoutComponent, children: route, canActivate: [LoginGuard]},*/
  {
    path: 'dashboard',
    loadChildren: './page/dashboard/dashboard.module#DashboardModule'
  },
 /* {path: 'login', component: LoginComponent},
  {path: '404', component: Code404Component},
  {path: '**', redirectTo: '/404', pathMatch: 'full'}*/
];


@NgModule({
  imports: [RouterModule.forRoot(routes),PageModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
