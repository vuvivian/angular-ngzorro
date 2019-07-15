/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:登陆
 */

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../service/login.service';
import {SeesionStorage} from '../../utils/session-storage/session.storage';
import {HttpClient} from '@angular/common/http';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import {HttpUtil} from '../../utils/http-factory/http-util';
import {emailValidator} from '../../utils/field-validator/form-validator';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('loginsignal', [
      state('in', style({transform: 'translateX(100)'})),
      transition('* => *', [
        animate(1000, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(50%)', offset: 0.5}),
          style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
        ]))
      ])
    ])
  ]
})

export class LoginComponent implements OnInit {
  http: any;
  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private Http: HttpClient, private loginService: LoginService,
              private sessionStorage: SeesionStorage, private message: NzMessageService, private httpUtil: HttpUtil) {
    this.router = router;
    this.http = Http;
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      db: [null, [Validators.required]],
      login: [null, [Validators.required, emailValidator]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (this.validateForm.valid) {
      this.loginService.login({params: this.validateForm.value}, (res) => {
        if (res.error) {
          this.message.warning(res.error.message);
        } else {
          this.router.navigate(['/app/dashboard']);
          this.sessionStorage.set('userInfo', res.result);
        }
      });
    }
  }
}
