<template>
  <chart class='line-chart' :auto-resize='true' :options='options'>
  </chart>
</template>

<script>
  import { graphic } from 'echarts/lib/export'

  var base = +new Date(1968, 9, 3)
  var oneDay = 24 * 3600 * 1000
  var date = []

  var data = [Math.random() * 300]

  for (var i = 1; i < 20000; i++) {
    var now = new Date(base += oneDay)
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'))
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]))
  }

  export default {
    data() {
      return {
        options: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          grid: {
            bottom: 20,
            top: 20
          },
          yAxis: {
            type: 'value',
            minInterval: 3,
            splitLine: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#fff'
              },
            },
            axisTick: {
              show: false
            },
            min: function(value) {
              return value.min
            }
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {
              normal: {
                color: new graphic.LinearGradient(0, 0, 0, 1.5, [{
                  offset: 0,
                  color: '#00FF96'
                }, {
                  offset: 1,
                  color: 'transparent'
                }])
              }
            },
          }]
        },
      }
    }
  }
</script>
