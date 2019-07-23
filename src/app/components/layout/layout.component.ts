import { Component, OnInit } from '@angular/core';
import {SeesionStorage} from '../../utils/session-storage/session.storage';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isCollapsed: boolean;

  constructor( private sessionStorage: SeesionStorage ) {
    this.isCollapsed = false;
  }

  ngOnInit(): void {
  }
  ngAfterContentInit() {
    console.log('bb', this.sessionStorage.get('ng-setting')['isCollapsed'])
    this.isCollapsed = this.sessionStorage.get('ng-setting')['isCollapsed'];
  }


}
