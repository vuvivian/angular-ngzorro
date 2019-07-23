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
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  http: any;
  router: any;
  language: string;

  constructor(Http: HttpClient, router: Router, private loginService: LoginService, private message: NzMessageService,
              private httpUtil: HttpUtil, private sessionStorage: SeesionStorage, private translate: TranslateService ) {
    this.http = Http;
    this.router = router;
    this.language = '中文';
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

  useLanguage(language: string) {
    this.translate.use(language);
    this.language = language === 'en' ? 'English' : '中文';
  }
}
