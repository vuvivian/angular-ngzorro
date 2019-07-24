/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:
 */

import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';


/* app */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* providers */
import { httpInterceptorProviders } from './utils/http-interceptors/index';
import {SeesionStorage} from './utils/session-storage/session.storage';
import {LocalStorage} from './utils/session-storage/local.storage';
import {LoginGuard} from './utils/router-guard/login-guard';

/* ng-zorro-antd */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

/* angular i18n config */
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

/* import ngx-translate and the http loader */
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

/* service */
import {LoginService} from './service/login.service';

/*----------------------------------------------------------------------------------*/
/* 自定义Module */
import {PageModule} from "./page/page.module";
import {LayoutModule} from "./layout/layout.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    /* import HttpClientModule after BrowserModule. */
    HttpClientModule,
    /* ng-zorro-antd */
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    /*-------------自定义模块--------------------*/
    LayoutModule,
    PageModule
  ],
  /* ng-zorro-antd national */
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    httpInterceptorProviders,
    LocalStorage,
    SeesionStorage,
    LoginService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
