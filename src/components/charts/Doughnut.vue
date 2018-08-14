<template>
  <chart :auto-resize='true' :options='options'>
  </chart>
</template>

<script>
  export default {

    data() {
      return {
        options: {
          title: {
            textStyle: {
              fontSize: 14,
              color: '#fff',
            },
            subtextStyle: {
              fontSize: 14,
              color: '#fff',
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['40%', '55%'],
              avoidLabelOverlap: true,
              label: {
                normal: {
                  show: true,
                },
              },
              startAngle: 0,
              data: [
                {
                  value: 400,
                  name: '直接访问',
                  itemStyle: {
                    normal: {
                      color: '#E9D70C'
                    }
                  }},
                {
                  value: 150,
                  name: '邮件营销',
                  itemStyle: {
                    normal: {
                      color: '#0DE5BA'
                    }
                  }},
                {
                  value: 450,
                  name: '联盟广告',
                  itemStyle: {
                    normal: {
                      color: '#2196F3'
                    }
                  }},
              ]
            }
          ]
        }
      }
    }
  }
</script>
