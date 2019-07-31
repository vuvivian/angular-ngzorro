/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:
 */
import { Injectable } from '@angular/core';
import {UserInfo} from "../../../interface/userInfo";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserInfo>;
  public currentUser: Observable<UserInfo>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<UserInfo>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  currentUserValue(): UserInfo {
    return this.currentUserSubject.value;
  }

  getAccess(user:UserInfo){
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  cancleAccess() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
