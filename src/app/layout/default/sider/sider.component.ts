import {Component, Input, OnInit} from '@angular/core';
import {MenuService} from 'src/app/services/core/menu/menu.service';
import {MenuList} from '../../../../assets/api/menuList';
import {MenuInfo} from "../../../interface/menuInfo";

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent implements OnInit {
  @Input() isCollapsed;
  menus:MenuInfo[];
  constructor( private menuService: MenuService) {
    // this.menus = menuService.getMenus();
    this.menus = MenuList.menu;
  }

  ngOnInit() {
    console.log(this.menus)
  }

}
