/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/15
 * Description:表单自定义检验规则
 */

import { FormControl, FormGroup } from '@angular/forms';

//  验证邮箱
export function emailValidator(control: FormControl): any {
  if (!control.value) {
    return { required: true };
  } else {
    const regs = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    const valid = regs.test(control.value);
    return valid ? null : {email: true};
  }
}

// 验证金额数字
export function amountValidator(control: FormControl): any {
  if (!control.value) {
    return { required: true };
  } else {
    const regs = /^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/;
    const valid = regs.test(control.value);
    return valid ? null : {amount: true};
  }
}
