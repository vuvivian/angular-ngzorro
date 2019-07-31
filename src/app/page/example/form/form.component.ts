/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/31
 * Description:
 */
import { Component, OnInit } from '@angular/core';
import {DfModal} from "../../../interface/dfModal";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  modalInfo: DfModal = {
    isVisible: false,
    title: '测试'
  };
  constructor() { }

  ngOnInit() {
  }

}
