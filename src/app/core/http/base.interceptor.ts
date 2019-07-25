/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:设置拦截器的注入器文件
 */

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import {throwError, Observable, of} from 'rxjs';
import {catchError, mergeMap, retry} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import { NzNotificationService } from 'ng-zorro-antd';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {

  constructor(private notification: NzNotificationService) {}

  intercept(req, next: HttpHandler): Observable<HttpEvent<any>> {
    const newReq = req.clone({
      url: req.hadBaseurl ? `${req.url}` : `${environment.apiBaseUrl}${req.url}`,
    });
    /* 此处设置额外的头部，token常用于登陆令牌 */
    if (!req.cancelToken) {
      /* token数据来源自己设置，常用localStorage存取相关数据 */
      newReq.headers =
        newReq.headers.set('token', 'my-new-auth-token');
    }
    // send cloned request with header to the next handler.
    return next.handle(newReq)
      .pipe(
        mergeMap((event: any) => {
          // 允许统一对请求错误处理，这是因为一个请求若是业务上错误的情况下其HTTP请求的状态是200的情况下需要
          if (event instanceof HttpResponse && event.status === 200) {
            return this.handleError(event);
          }
          // 若一切都正常，则后续操作
          return of(event);
        }),
        /*失败时重试1次*/
        retry(1),
        /*捕获响应错误*/
        catchError((err: HttpErrorResponse) => this.handleError(err))
      );
  }

  // Todo 业务通用异常处理
  private handleError( error: HttpResponse<any> | HttpErrorResponse): Observable<any> {
    switch (error.status) {
      case 200:
        break;
      case 401: // 未授权
        this.notification.create('error', '授权失败', '授权失败');
        break;
      default:
        if (error instanceof HttpErrorResponse) {
          this.notification.create('error', '请求发生错误', error.message);
        }
        break;
    }
    return of(error)
  }
}
