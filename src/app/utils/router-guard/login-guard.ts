/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/15
 * Description:路由拦截
 */

import { CanActivate } from '@angular/router';
import {SeesionStorage} from '../session-storage/session.storage';
import { NzMessageService } from 'ng-zorro-antd';
import {Router} from '@angular/router';

export class LoginGuard implements CanActivate {

  constructor(private sessionStorage: SeesionStorage, private router: Router, private message: NzMessageService) {
    this.sessionStorage = sessionStorage;
    this.router = router;
    this.message = message;
  }
  canActivate() {
    let loggedIn = true;
    const userInfo = this.sessionStorage.get('userInfo');
    if (!userInfo) {
      this.message.warning('用户信息丢失，请重新登陆');
      this.router.navigate(['/login']);
      loggedIn = false;
    }
    return loggedIn;
  }
}
