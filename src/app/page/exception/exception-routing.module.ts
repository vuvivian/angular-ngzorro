import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Notfound404Component} from "./notfound404/notfound404.component";


const routes: Routes = [
  { path: '404', component: Notfound404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExceptionRoutingModule { }
