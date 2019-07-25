/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/15
 * Description:路由拦截
 */

import { CanActivate } from '@angular/router';
import {Router} from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';
import {AuthService} from "../../services/account/auth/auth.service";

export class LoginGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService, private notification :NzNotificationService) {}

  canActivate() {
    const currentUser = this.authService.currentUserValue();
    if(currentUser){
      return true
    }
    this.router.navigate(['/login']);
    this.notification.create('error', 'ps cloud','登陆超时，请重新登陆');
    return false;
  }
}
