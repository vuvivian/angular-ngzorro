import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { HeaderComponent } from './default/header/header.component';
import { FooterComponent } from './default/footer/footer.component';
import {SharedModule} from "../shared/shared.module";
import { SiderComponent } from './default/sider/sider.component';


const COMPONENTS = [
  DefaultComponent,
  HeaderComponent,
  FooterComponent,
  SiderComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ...COMPONENTS
  ]
})
export class LayoutModule { }
