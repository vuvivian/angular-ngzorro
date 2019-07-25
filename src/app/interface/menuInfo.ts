export interface MenuInfo {
  [key: string]: any;
  /** 第几级菜单 */
  level: number;
  /** 唯一key */
  key: string;
  /** 文本 */
  title: string;
  /** 图标 */
  icon?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 子菜单 */
  children?: MenuInfo[];
  /** 路由 */
  router?: string;
  /** 是否展开（父菜单） */
  open?: boolean;
  /** 是否选中（子菜单） */
  selected?: boolean;
}
