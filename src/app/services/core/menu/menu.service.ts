/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:
 */
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MenuInfo} from "../../../interface/menuInfo";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menus: MenuInfo[] = [];

  constructor(private http: HttpClient) {
  }

  // 获取菜单
  getMenus() {
    return this.menus;
  }

  // 加载用户所拥有的菜单
  async load(userId?: string) {
    const url = 'assets/data/menuList.json';
    return this.http.get<MenuInfo[]>(url,{params: {userId}})
      .subscribe(data => {
        console.log('data',data);
        this.menus = data;
      })

  }

}

