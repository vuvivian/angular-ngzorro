/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageModule} from "./page/page.module";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),PageModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
