/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:
 */
import { Injectable } from '@angular/core';
import {RequestService} from "../../../core/request/request.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private request:RequestService) { }

  login(param): Observable<any> {
    return this.request.post('web/session/authenticate', param)
  }

  logout(param): Observable<any> {
    return this.request.post('web/session/destroy', param)
  }
}
