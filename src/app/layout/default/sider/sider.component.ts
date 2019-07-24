import {Component, Input, OnInit} from '@angular/core';
import {MenuList} from '../../../configs/menuList';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent implements OnInit {
  @Input() isCollapsed;
  menus;
  constructor() {

  }

  ngOnInit() {
    this.menus = MenuList.menu
  }

}
