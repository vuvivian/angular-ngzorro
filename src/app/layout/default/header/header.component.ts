/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/24
 * Description:头部
 */

import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {fromEvent} from "rxjs";
import {LoginService} from "../../../services/account/login/login.service";
import {AuthService} from "../../../services/account/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  resize = document.body.clientWidth;
  isCollapsed = false;
  @Output() nzCollapsed = new EventEmitter<void>();

  constructor(private router: Router,private loginService: LoginService,private authService: AuthService) {}

  ngOnInit() {
    // 监听浏览器的变化
    fromEvent(window, 'resize')
      .subscribe((event) => {
        this.resize = event.currentTarget['innerWidth'];
      });
  }

  toggleFold() {
    this.isCollapsed = !this.isCollapsed;
    this.nzCollapsed.emit();
  }

  logout() {
    this.loginService.logout({});
    this.authService.cancleAccess();
    this.router.navigateByUrl('/login');
  }
}
