/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/06
 * Description:
 */

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginService} from '../../service/login.service';
import { NzMessageService } from 'ng-zorro-antd';
import {HttpUtil} from '../../utils/http-factory/http-util';
import {SeesionStorage} from '../../utils/session-storage/session.storage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  http: any;
  router: any;

  constructor(Http: HttpClient, router: Router, private loginService: LoginService, private message: NzMessageService,
              private httpUtil: HttpUtil, private sessionStorage: SeesionStorage, ) {
    this.http = Http;
    this.router = router;
  }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout({}, (res) => {
      if (res.error) {
        this.message.warning(res.error.message);
      } else {
        this.router.navigate(['/login']);
        this.sessionStorage.remove('userInfo');
      }
    });
  }
}
