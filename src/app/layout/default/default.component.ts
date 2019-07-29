import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;
  visible = false;

  constructor() { }

  ngOnInit() {}

  launchSidebar(){
    this.isCollapsed = !this.isCollapsed
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
