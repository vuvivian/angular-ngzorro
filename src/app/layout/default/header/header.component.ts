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
  isFullScreen = false;
  langulage = '中文';
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

  toggleArrows(elem: any = document.documentElement): void{
    const docElmWithBrowsersFullScreenFunctions = document.documentElement as HTMLElement & {
      mozRequestFullScreen(): Promise<void>;
      webkitRequestFullscreen(): Promise<void>;
      msRequestFullscreen(): Promise<void>;
    };
    const docWithBrowsersExitFunctions = document as Document & {
      mozCancelFullScreen(): Promise<void>;
      webkitExitFullscreen(): Promise<void>;
      msExitFullscreen(): Promise<void>;
    };
    if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
      docElmWithBrowsersFullScreenFunctions.requestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
      docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
    } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
      docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
    }
    if (docWithBrowsersExitFunctions.exitFullscreen) {
      docWithBrowsersExitFunctions.exitFullscreen();
    } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
      docWithBrowsersExitFunctions.mozCancelFullScreen();
    } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      docWithBrowsersExitFunctions.webkitExitFullscreen();
    } else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
      docWithBrowsersExitFunctions.msExitFullscreen();
    }
    this.isFullScreen = !this.isFullScreen;
    /* if(!document.fullscreenElement) {
       const docElm = elem;
       if(docElm.requestFullScreen) {
         docElm.requestFullScreen();
       } else if(docElm.mozRequestFullScreen) {
         docElm.mozRequestFullScreen();
       } else if(docElm.webkitRequestFullscreen) {
         docElm.webkitRequestFullscreen();
       } else if (docElm.msRequestFullscreen) {
         docElm.msRequestFullscreen();
       }
     } else {
       if(document.exitFullscreen) {
         document.exitFullscreen();
       }
     }*/
  }

  changeLanguage(language:string) {
    this.langulage = language==='zh'?'中文':'English'
  }
  logout() {
    this.loginService.logout({});
    this.authService.cancleAccess();
    this.router.navigateByUrl('/login');
  }
}
