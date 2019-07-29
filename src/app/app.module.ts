/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:
 */
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
/* angular i18n config */
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

/*----------------------------------------------------------------------------------*/
/* providers */
import {LoginGuard} from './core/guard/login-guard';
/* import ngx-translate and the http loader */
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
/* 自定义Module */
import {PageModule} from "./page/page.module";
import {LayoutModule} from "./layout/layout.module";
import {StartupService} from "./core/startup/startup.service";
import {StartupServiceFactory} from "./core/startup/startup.factory";
import {BaseInterceptor} from "./core/http/base.interceptor";
import {RequestService} from "./core/request/request.service";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /*-import HttpClientModule after BrowserModule-*/
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    /*----ngx-translate and the loader module----*/
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    /*---------------自定义模块--------------------*/
    LayoutModule,
    PageModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass:BaseInterceptor,
      multi: true
    },
    RequestService,
    LoginGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
