import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-df-table',
  templateUrl: './df-table.component.html',
  styleUrls: ['./df-table.component.scss']
})
export class DfTableComponent implements OnInit,OnChanges {
  constructor() { }
  allChecked = false;
  dataChecked = [];
  @Input() tableDatas;
  @Output() checked = new EventEmitter<object>();
  @Output() checkedSingle = new EventEmitter<object>();
  @Output() switch = new EventEmitter<object>();
  @Output() delete = new EventEmitter<object>();
  @Output() editData = new EventEmitter<object>();
  @Output() page = new EventEmitter<number>();
  ngOnInit() {
  }
  ngOnChanges() {
    if (this.tableDatas.checked || this.tableDatas.checkedSingle) {
      this.dataChecked = [];
      const lth = this.tableDatas.itemLength;
      for (let i = 0; i < lth; i++) {
        this.dataChecked.push({ checked: false, id: i });
      }
    }
  }
  refreshStatus(i): void {
    this.allChecked = this.dataChecked.every(e => e.checked === true);
    this.checkEmit();
  }
  refreSingle(i) {
    this.dataChecked.filter(e => e.id !== i)
      .forEach(_e => _e.checked = false);
    this.checkedSingle.emit(i);
  }
  checkAll(): void {
    this.dataChecked.forEach(e => {
      e.checked = !e.checked;
    });
    this.checkEmit();
  }
  checkEmit() {
    const ids = [];
    if (this.dataChecked.some(e => e.checked) === true) {
      this.dataChecked.filter(e => e.checked === true)
        .forEach(_e => {
          ids.push(_e.id);
        });
    }
    this.checked.emit(ids);
  }
  changeSwitch(e) {
    this.switch.emit(e);
  }
  edit(e) {
    this.editData.emit(e);
  }
  confirm(e) {
    this.delete.emit(e);
  }
  cancel() {

  }
  refreshData($event) {
    console.log($event)
    this.page.emit($event);
  }
}
