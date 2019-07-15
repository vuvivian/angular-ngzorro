/**
 * Author:wangjuan04@inspur.com
 * Date: 2019/07/09
 * Description:缓存数据处理
 */


export class SeesionStorage {

  public seesionStorage: any;

  constructor() {
    if (!sessionStorage) {
      throw new Error('Current browser does not support Seesion Storage');
    }
    this.seesionStorage = sessionStorage;
  }

  public set(key: string, value: string): void {
    this.seesionStorage[key] = value;
  }

  public get(key: string): string {
    return this.seesionStorage[key] || false;
  }

  public setObject(key: string, value: any): void {
    this.seesionStorage[key] = JSON.stringify(value);
  }

  public getObject(key: string): any {
    return JSON.parse(this.seesionStorage[key] || '{}');
  }

  public remove(key: string): any {
    this.seesionStorage.removeItem(key);
  }
}
