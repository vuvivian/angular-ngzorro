/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:登录登出服务
 */

import {Injectable} from '@angular/core';
import {HttpUtil} from '../utils/http-factory/http-util';
import {SeesionStorage} from '../utils/session-storage/session.storage';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private httpUtil: HttpUtil, private sessionStorage: SeesionStorage, private route: Router) {}

  /* 登陆 */
  login(param, cb?: (res: any) => void) {
    this.httpUtil.post('web/session/authenticate', param, (res) => {
      cb(res);
    });
  }
  /* 登出 */
  logout(param, cb?: (res: any) => void ) {
    this.httpUtil.post('web/session/destroy', param, (res) => {
      cb(res);
    });
  }
}
