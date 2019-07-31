/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/25
 * Description:
 */
import {Component, Input, OnInit} from '@angular/core';
import {MenuService} from 'src/app/services/core/menu/menu.service';
import {MenuList} from '../../../../assets/api/menuList';
import {MenuInfo} from "../../../interface/menuInfo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent implements OnInit {
  @Input() isCollapsed;
  menus:MenuInfo[];
  constructor( private menuService: MenuService, private router:Router) {
    // this.menus = menuService.getMenus();
    this.menus = MenuList.menu;
  }

  /* todo 优化 */
  ngOnInit() {
    console.log(this.menus);
    this.menus.map((item) => {
      item.open = this.router.url.includes(item.key);
      /* todo 涉及多级菜单时 */
      return item;
    });
  }

}
