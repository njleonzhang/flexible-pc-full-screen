<template>
  <chart ref='chart' auto-resize :options='options'></chart>
</template>

<script>
  export default {
    mounted() {
      this.handler = setInterval(() => {
        this.options.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0
      }, 2000)
    },
    beforeDestroy() {
      clearInterval(this.handler)
    },
    data() {
      return {
        handler: '',
        options: {
          tooltip: {
            formatter: "{a} <br/>{b} : {c}%"
          },
          toolbox: {
            feature: {
              restore: {},
              saveAsImage: {}
            }
          },
          series: [{
            name: '业务指标',
            type: 'gauge',
            detail: {
              formatter: '{value}%'
            },
            data: [{
              value: 50,
              name: '完成率'
            }]
          }]
        }
      }
    }
  }
</script>
