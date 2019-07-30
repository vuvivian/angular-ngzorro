import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-df-pagination',
  templateUrl: './df-pagination.component.html',
  styleUrls: ['./df-pagination.component.scss']
})
export class DfPaginationComponent implements OnInit {
  @Input() paginationParams;
  @Output() getPageIndex = new EventEmitter<number>();
  currentPage = 1;

  constructor() { }

  ngOnInit() {
    this.currentPage = this.paginationParams.pageIndex;
  }

  // 页码改变的回调
  pageIndexChange() {
    this.getPageIndex.emit(this.currentPage);
  }

}
