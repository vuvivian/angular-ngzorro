/**
 * itemLength: 当前也数据量
 * title: 表格标题
 * footer：表格底部
 * loading： 加载中
 * bordered：是否展示外边框和列边框
 * checked：多选框
 * checkedSingle：单选框
 * dataTh：表头
 * dataSet：数据
 * tdItem：数据项名
 * switch：状态
 * switchName：状态字段名
 * size：表格大小
 * total：数据总理，用于分页
 * pagination：是否开启分页
 * pageSize：每页数据
 * pageIndex：当前页
 */
import {DfPagination} from "./dfPagination";

export interface DfTable {
  // itemLength?: number;
  // switch?: boolean;
  // switchName?: string;
  /** 列定义 */
  column?: any;
  /** 数据源 */
  dataSource?: any;
  /** 是否开启分页 */
  pagination?: boolean;
  /** 分页参数 */
  pageParams?: DfPagination;
  /** 表格标题 */
  title?: string
  /** 表格尾部 */
  footer?: string;
  /** 是否显示边框 */
  bordered?: boolean;
  /** 是否显示加载中 */
  loading?: boolean;
  /** 大小  */
  size?: string;
  /** 多选  */
  checked?: boolean;
  /** 单选  */
  checkedSingle?: boolean;
  /** 总条数  分页/复选用  */
  total?: number;
  /** 操作列 */
  showAction?: boolean
}
