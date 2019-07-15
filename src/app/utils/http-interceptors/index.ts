/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/08
 * Description:Http interceptor providers in outside-in order
 */

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseInterceptor } from './base-interceptor';


export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BaseInterceptor,
    multi: true
  },
];
