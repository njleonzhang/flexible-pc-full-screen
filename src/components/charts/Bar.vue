<template>
  <chart class='line-chart' :auto-resize='true' :options='options'>
  </chart>
</template>

<script>
  import {
    graphic
  } from 'echarts/lib/export'

  var data = [220, 182, 310, 123, 442, 321, 90, 334, 198, 123, 125, 220]
  var yMax = 500
  var dataShadow = []

  for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax)
  }

  export default {
    data() {
      return {
        options: {
          grid: {
            bottom: 20,
            top: 20
          },
          xAxis: {
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            z: 10
          },
          yAxis: {
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#999'
              }
            }
          },
          series: [{
              type: 'bar',
              itemStyle: {
                normal: {
                  color: 'rgba(0,0,0,0.05)'
                }
              },
              barGap: '-100%',
              barCategoryGap: '40%',
              data: dataShadow,
              animation: false
            },
            {
              type: 'bar',
              itemStyle: {
                normal: {
                  color: new graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: '#83bff6'
                      },
                      {
                        offset: 0.5,
                        color: '#188df0'
                      },
                      {
                        offset: 1,
                        color: '#188df0'
                      }
                    ]
                  )
                },
                emphasis: {
                  color: new graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: '#2378f7'
                      },
                      {
                        offset: 0.7,
                        color: '#2378f7'
                      },
                      {
                        offset: 1,
                        color: '#83bff6'
                      }
                    ]
                  )
                }
              },
              data: data
            }
          ]
        }
      }
    }
  }
</script>
