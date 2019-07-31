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
import { DfPaginationComponent } from './ng-zorro/df-pagination/df-pagination.component';
import { DfSelectFormComponent } from './ng-zorro/df-select-form/df-select-form.component';
import { DfModalComponent } from './ng-zorro/df-modal/df-modal.component';

const COMPONENTS = [
  DfTableComponent,
  DfAutoCompleteComponent,
  DfPaginationComponent,
  DfSelectFormComponent,
  DfModalComponent,
];
const SHAREDS = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  NgZorroAntdModule,
  NgxEchartsModule,
  TranslateModule,
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
