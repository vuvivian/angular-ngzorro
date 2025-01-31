import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import {PaginationComponent} from "./pagination/pagination.component";
import {TreeComponent} from "./tree/tree.component";

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'table', component: TableComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'tree', component: TreeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
