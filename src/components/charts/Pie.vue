<template>
  <chart class='line-chart' :auto-resize='true' :options='options'>
  </chart>
</template>

<script>
  export default {
    data() {
      return {
        options: {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          toolbox: {
            show: true,
            feature: {
              mark: {
                show: true
              },
              dataView: {
                show: true,
                readOnly: false
              },
              magicType: {
                show: true,
                type: ['pie', 'funnel']
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          calculable: true,
          series: [{
            name: '半径模式',
            type: 'pie',
            roseType: 'radius',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            lableLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: [{
                value: 10,
                name: 'rose1'
              },
              {
                value: 5,
                name: 'rose2'
              },
              {
                value: 15,
                name: 'rose3'
              },
              {
                value: 25,
                name: 'rose4'
              },
              {
                value: 20,
                name: 'rose5'
              },
              {
                value: 35,
                name: 'rose6'
              },
              {
                value: 30,
                name: 'rose7'
              },
              {
                value: 40,
                name: 'rose8'
              }
            ]
          }]
        }
      }
    }
  }
</script>
