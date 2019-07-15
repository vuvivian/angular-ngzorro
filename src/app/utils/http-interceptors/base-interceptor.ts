/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:设置拦截器的注入器文件
 */

import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { throwError , Observable} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {

  constructor() {}
  intercept(req, next: HttpHandler) {
    const newReq = req.clone({
      url: req.hadBaseurl ? `${req.url}` : `${environment.apiBaseUrl}${req.url}`,
    });
    /* 此处设置额外的头部，token常用于登陆令牌 */
    if (!req.cancelToken) {
      /* token数据来源自己设置，我常用localStorage存取相关数据 */
      newReq.headers =
        newReq.headers.set('token', 'my-new-auth-token');
    }

    // send cloned request with header to the next handler.
    return next.handle(newReq)
      .pipe(
        /*失败时重试1次，可自由设置*/
        retry(1),
        /*捕获响应错误*/
        catchError(this.handleError)
      );
  }

  // Todo 异常处理
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
