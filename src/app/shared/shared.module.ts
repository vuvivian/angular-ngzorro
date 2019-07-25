/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/24
 * Description:公共Module导出
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { DfTableComponent } from './ng-zorro/df-table/df-table.component';
import { DfAutoCompleteComponent } from './ng-zorro/df-auto-complete/df-auto-complete.component';

const COMPONENTS = [
  DfTableComponent,
  DfAutoCompleteComponent,
];
const SHAREDS = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  NgZorroAntdModule,
  NgxEchartsModule,
];

@NgModule({
  declarations: [
    ...COMPONENTS,

  ],
  imports: [
    ...SHAREDS,
  ],
  exports: [
    ...SHAREDS,
    ...COMPONENTS
  ]
})
export class SharedModule { }
