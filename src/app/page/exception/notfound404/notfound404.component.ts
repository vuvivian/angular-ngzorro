/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/06
 * Description:
 */
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-notfound404',
  templateUrl: './notfound404.component.html',
  styleUrls: ['./notfound404.component.scss']
})
export class Notfound404Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  /* 返回首页 */
  goBack = () => {
    this.router.navigate(['/']);
  }

}
