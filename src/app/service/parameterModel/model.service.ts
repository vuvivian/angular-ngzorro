/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/15
 * Description:模型组服务
 */
import {Injectable} from '@angular/core';
import {HttpUtil} from '../../utils/http-factory/http-util';

@Injectable()
export class ModelService{
  constructor(private httpUtil: HttpUtil) {}

  /* 获取模型表单列表 */
  getModalList(params?: object, cb?: (res: any) => void) {
    this.httpUtil.post('web/dataset/search_read', params, (res) => {
      cb(res);
    });
  }
}
