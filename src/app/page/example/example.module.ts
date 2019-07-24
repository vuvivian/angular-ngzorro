import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [TableComponent, FormComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule { }
