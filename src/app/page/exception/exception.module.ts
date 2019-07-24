import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExceptionRoutingModule } from './exception-routing.module';
import { Notfound404Component } from './notfound404/notfound404.component';
import {SharedModule} from "../../shared/shared.module";

const COMPONENTS = [
  Notfound404Component
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule,
    ExceptionRoutingModule
  ]
})
export class ExceptionModule { }
