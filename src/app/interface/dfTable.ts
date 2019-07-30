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
export interface DfTable {
  itemLength?: number;
  title?: string;
  footer?: string;
  loading?: boolean;
  bordered?: boolean;
  checked?: boolean;
  checkedSingle?: boolean;
  dataTh?: any;
  dataSet?: any;
  tdItem?: any;
  switch?: boolean;
  size: string;
  total?: number;
  switchName?: string;
  pagination?: boolean;
  pageSize?: number;
  pageIndex?: number;
}
