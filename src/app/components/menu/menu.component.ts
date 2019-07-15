/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/06
 * Description:
 */

import { Component, OnInit } from '@angular/core';
import {MenuList} from '../../configs/menuList';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menus = MenuList.menu;
  constructor() { }

  ngOnInit() {
  }
}
