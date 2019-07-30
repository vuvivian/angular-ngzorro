import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import {SharedModule} from "../../shared/shared.module";
import { TreeComponent } from './tree/tree.component';
import { TableTreeComponent } from './table-tree/table-tree.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [TableComponent, FormComponent, TreeComponent, TableTreeComponent, PaginationComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule { }
