/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/23
 * Description:
 */
import { Component, OnInit } from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../../../services/account/login/login.service";
import {AuthService} from "../../../services/account/auth/auth.service";

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

  constructor(private fb: FormBuilder, private router: Router, private Http: HttpClient,
              private loginService: LoginService,private authService: AuthService) {
    this.router = router;
    this.http = Http;
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      db: [null, [Validators.required]],
      login: [null, [Validators.required]],
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
      this.loginService.login(this.validateForm.value).subscribe(
        user => {
          console.log('response',user);
          this.authService.getAccess(user);
          this.router.navigate(['/']);
      }
      )
    }
  }
}
