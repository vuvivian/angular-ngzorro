import { Component, OnInit } from '@angular/core';
import {DfPagination} from "../../../interface/dfPagination";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pageParams: DfPagination = {
    pageIndex:1,
    pageSize:5,
    total:100
  };
  constructor() { }

  ngOnInit() {}
  page($event) {
    this.pageParams.pageIndex = $event
  }

}
