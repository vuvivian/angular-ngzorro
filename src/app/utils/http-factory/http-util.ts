/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description: 接口请求方式
 */

import { Injectable } from '@angular/core';
import {HttpClient, HttpInterceptor, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpUtil {
  http: any;

  constructor(Http: HttpClient) {
    this.http = Http;
  }

  /*post 请求*/
  public post(url, data?: object, cb?: (res: any) => void, options?: object) {
    const vm = this;
    vm.http.post(url, data, options)
      .subscribe(res => {
        cb(res);
      });
  }

  /* 测试 */
    public post2222(url: string, body?: any | null): Observable<{id: number;
      code: string;
      name: string;
      status: number;
      createTime: string;
      updateTime: string}> {
        return this.http.post(url, body);
    }

  /* get 请求*/
  public get(url: string, params?: object, cb?: (data: any) => void) {
    let httpParams = new HttpParams();
    console.log('get开始请求');
    const vm = this;
    if (params) {
      for (const key in params) {
        if (params[key] === false || params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    vm.http.get(url, { params: httpParams })
      .subscribe(data => {
        console.log('get请求结束', data);
        cb(data);
      });
  }

  /* put 请求 */
  public put(url: string, data?: object, cb?: (res: any) => {}, options?: object) {
    console.log('put开始请求');
    const vm = this;
    vm.http.put(url, data, options)
      .subscribe(res => {
        console.log('put请求结束', res);
        cb(res);
      });
  }

  /* delete 请求 */
  public delete(url, params?: object, cb?: (data: any) => void) {
    let httpParams = new HttpParams();
    console.log('delete开始请求');
    const vm = this;
    if (params) {
      for (const key in params) {
        if (params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    vm.http.delete(url, { params: httpParams })
      .subscribe(data => {
        console.log('delete请求结束', data);
        cb(data);
      });
  }
}

