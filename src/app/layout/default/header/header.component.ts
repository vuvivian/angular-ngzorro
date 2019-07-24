/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/24
 * Description:头部
 */

import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  resize = document.body.clientWidth;
  isCollapsed = false;
  @Output() nzCollapsed = new EventEmitter<void>();
  constructor(
    // @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
               private router: Router
  ) {

  }

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

  // todo
  logout() {
    // this.tokenService.clear();
    // this.router.navigateByUrl('passport/login');
  }
}
