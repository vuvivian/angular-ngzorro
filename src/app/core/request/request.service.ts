/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/25
 * Description:
 */
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  http: any;

  constructor(Http: HttpClient) {
    this.http = Http;
  }

  /* get 请求  callback方式*/
  public getC(url: string, params?: any, cb?: (data: any) => void) {
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

  /*get 请求 Observable方式*/
  get(url: string, params?: any): Observable<any> {
    if (params && params['query']) {
      params['query'] = JSON.stringify(params['query']);
    }
    const p = new HttpParams({
      fromObject: params
    });
    return this.http.get(url, {
      params: p,
      withCredentials: true
    });
  }

  /*post 请求 callback方式*/
  postC(url, data?: object, cb?: (res: any) => void, options?: object) {
    const vm = this;
    vm.http.post(url, data, options)
      .subscribe(res => {
        cb(res);
      });
  }

  /*post 请求 Observable方式*/
  post(url: string, params?: any): Observable<any> {
    const vm = this;
    return vm.http.post(url, params);
  }

  /* put 请求 */
  put(url: string, data?: object, cb?: (res: any) => {}, options?: object) {
    console.log('put开始请求');
    const vm = this;
    vm.http.put(url, data, options)
      .subscribe(res => {
        console.log('put请求结束', res);
        cb(res);
      });
  }

  /* delete 请求 */
  delete(url, params?: object, cb?: (data: any) => void) {
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
