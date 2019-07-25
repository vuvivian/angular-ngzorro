import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from "../layout/default/default.component";
import {LoginGuard} from "../core/guard/login-guard";

const routes: Routes = [
  {path: '', redirectTo: '/default/dashboard', pathMatch: 'full' },
  {
    path: 'default', // todo 动态加载
    canActivate: [LoginGuard],
    component:DefaultComponent, // todo 动态加载
    children:[
      {path: '', redirectTo: '/default/dashboard', pathMatch: 'full' },
      {path:'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
      {path:'example', loadChildren: './example/example.module#ExampleModule'},
    ]
  },
  {path:'login', loadChildren: './account/account.module#AccountModule'},
  {path: 'exception', loadChildren: './exception/exception.module#ExceptionModule'},
  {path: '**', redirectTo: 'exception/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
