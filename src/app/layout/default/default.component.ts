import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;
  constructor() { }

  ngOnInit() {}

  launchSidebar(){
    this.isCollapsed = !this.isCollapsed
  }
}
