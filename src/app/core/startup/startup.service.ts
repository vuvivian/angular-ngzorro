/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/25
 * Description:
 */
import { Injectable } from '@angular/core';
import {MenuService} from "../../services/core/menu/menu.service";
import {AppInfo} from "../../interface/appInfo";
import {UserInfo} from "../../interface/userInfo";

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(private menuService: MenuService) {}

  async startApp() {
    const app: AppInfo = {
      name:"web app",
      description: "base on angular"
    };

    const user: UserInfo = {
      id:'1',
      userName: 'vivian',
      email: 'wangjuan04@inspur.com',
      database: 'ww_database01'
    };

    await this.menuService.load(user.id)
  }
}
