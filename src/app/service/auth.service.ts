/*
/!**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:授权服务
 *!/

import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login.service';

@Injectable()
export class AuthService {

  constructor( private router: Router, private loginService: LoginService) {}

  /!* 检查用户信息 *!/
  public checkLogin(): void {
    const user = this.getUser();
    const userId = user != null ? user.uid : null;
    const uid = this.getUser();
    const jwt = this.getAuthorizationToken();
    if (userId === null || uid === null || jwt === null || userId !== uid) {
      this.router.navigateByUrl('/login');
    }
  }

  /!* 本地退出并通知服务器退出系统 *!/
  public logout(): void {
    localStorage.clear();
    this.loginService.logout().subscribe(
      () => {
        this.router.navigateByUrl('/login');
      },
      error2 => {
        this.router.navigateByUrl('/login');
      }
    );
  }

  public getAuthorizationToken(): string {
    const jwt = localStorage.getItem('Authorization');
    return jwt != null ? jwt : null;
  }

  public updateAuthorizationToken(jwt: string): void {
    localStorage.setItem('Authorization', jwt);
  }

  public updateUser(user: any): void {
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  public getUser(): any {
    const user = localStorage.getItem('userInfo');
    return user != null ? JSON.parse(user) : null;
  }

  public getUid(): string {
    const uid = localStorage.getItem('uid');
    return uid != null ? uid : null;
  }

  public updateUid(uid: string): void {
    localStorage.setItem('uid', uid);
  }

  public updateMenuTree(menuTree: any[]): void {
    sessionStorage.setItem('menuTree', JSON.stringify(menuTree));
  }

  public getMenuTree(): any[] {
    const menuTree = sessionStorage.getItem('menuTree');
    return menuTree != null ? JSON.parse(menuTree) : null;
  }
}
*/
