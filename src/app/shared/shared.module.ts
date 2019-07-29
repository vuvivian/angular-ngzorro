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
import {TranslateModule} from "@ngx-translate/core";
import { NgxEchartsModule } from 'ngx-echarts';
import { DfTableComponent } from './ng-zorro/df-table/df-table.component';
import { DfAutoCompleteComponent } from './ng-zorro/df-auto-complete/df-auto-complete.component';
import { DeFormComponent } from './ng-zorro/de-form/de-form.component';
import { DeTableTreeComponent } from './ng-zorro/de-table-tree/de-table-tree.component';
import { DeTreeComponent } from './ng-zorro/de-tree/de-tree.component';

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
  TranslateModule
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    DeFormComponent,
    DeTableTreeComponent,
    DeTreeComponent,

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
