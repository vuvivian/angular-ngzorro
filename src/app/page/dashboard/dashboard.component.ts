import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  chartOption: EChartOption = {
    color: ['#3398DB'],
    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'直接访问',
        type:'bar',
        barWidth: '60%',
        data:[10, 52, 200, 334, 390, 330, 220]
      }
    ]
  };
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  pieOptions: EChartOption = {
    color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'],
    title: {
      text: '南丁格尔玫瑰图',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc'
      }
    },

    tooltip: {
      trigger: 'item',
      formatter: "{b} : {c} ({d}%)"
    },

    visualMap:[ {
      show:false,
      min: 500,
      max: 600,
      inRange: {
        //colorLightness: [0, 1]
      }
    }],
    "series": [{
      name: '访问来源',
      type: 'pie',
      radius: '50%',
      center: ['50%', '50%'],

      data: [{
        value: 285,
        name: '黑名单查询'
      },
        {
          value: 410,
          name: '红名单查询'
        },
        {
          value: 274,
          name: '法人行政处罚'
        },
        {
          value: 235,
          name: '其它查询'
        }
      ].sort(function(a, b) {
        return a.value - b.value
      }),
      roseType: 'radius',

      label: {
        normal: {
          formatter: ['{c|{c}次}', '{b|{b}}'].join('\n'),
          rich: {
            c: {
              color: 'rgb(241,246,104)',
              fontSize: 20,
              fontWeight:'bold',
              lineHeight: 5
            },
            b: {
              color: 'rgb(98,137,169)',
              fontSize: 15,
              height: 40
            },
          },
        }
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: 'rgb(98,137,169)',
          },
          smooth: 0.2,
          length: 10,
          length2: 20,

        }
      },
      itemStyle: {
        normal: {
          shadowColor: 'rgba(0, 0, 0, 0.8)',
          shadowBlur: 50,
        }
      }
    }]
  }
  lineOptions :EChartOption = {
    color: ['#3398DB'],
    tooltip: {//鼠标悬浮弹出提示框
      trigger:'axis', //提示框弹出的触发时间，折线图和柱状图为axis
      formatter:"{a} <br/>{b} : {c} "//提示框提示的信息，{a}series内的名字，{b}为块状的名字，{c}为数值
    },
    grid: {//统计图距离边缘的距离
      top: '8%',
      left: '10%',
      right: '10%',
      bottom: '8%'
    },
    xAxis: [{//x轴
      type: 'category',//数据类型为不连续数据
      boundaryGap: false,//坐标轴两边是否留白
      axisLine: { //坐标轴轴线相关设置。数学上的x轴
        show: true,
        lineStyle: {
          color: '#233e64' //x轴颜色
        },
      },
      axisLabel: { //坐标轴刻度标签的相关设置

      },
      axisTick: { show: true,},//刻度点数轴
      data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日'],
    }],
    yAxis: [{//y轴的相关设置
      type: 'value',//y轴数据类型为连续的数据
// 			min: 0,//y轴上的刻度最小值
// 			max:140,//y轴上的刻度最大值
      splitNumber: 7,//y轴上的刻度段数
      splitLine: {//y轴上的y轴线条相关设置
        show: true,
        lineStyle: {
          color: '#233e64'
        }
      },
      axisLine: {//y轴的相关设置
        show: true,
        lineStyle: {
          color: '#233e64' //y轴颜色
        },
      },
      axisLabel: {//y轴的标签相关设置
        formatter: "{value} %",
      },
      axisTick: { show: true,},  //刻度点数轴
    }],
    series: [{
      name: '张三英语成绩',
      type: 'line',//统计图类型为折线图
      smooth: true, //是否平滑曲线显示
      symbolSize:0,//数据点的大小，[0,0]//b表示宽度和高度
      lineStyle: {//线条的相关设置
        normal: {
          color: "#3deaff"   // 线条颜色
        }
      },
      areaStyle: { //区域填充样式
        normal: {
          //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0,  color: 'rgba(61,234,255, 0.9)'},
            { offset: 0.7,  color: 'rgba(61,234,255, 0)'}
          ], false),

          shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
          shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
        }
      },
      data: [5, 1, 6, 4, 2, -5, -3,-2,8,6,2,-3,0,8,5,6,7,2,-7,5,3,7,2,3,4,5,7,7.5,8,7]
    }]
  }
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
    'Los Angeles battles huge wildfires.'
  ];
  constructor() { }

  ngOnInit() {}

}
