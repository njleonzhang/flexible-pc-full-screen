<template>
  <chart :auto-resize='true' :options='options'></chart>
</template>

<script>
let data = [
  {name: '湘潭', value: 154},
  {name: '金华', value: 157},
  {name: '岳阳', value: 169},
  {name: '长沙', value: 175},
  {name: '衢州', value: 177},
  {name: '廊坊', value: 193},
  {name: '菏泽', value: 194},
  {name: '合肥', value: 229},
  {name: '武汉', value: 273},
  {name: '大庆', value: 279}
]
const geoCoordMap = {
  '湘潭': [112.91, 27.87],
  '金华': [119.64, 29.12],
  '岳阳': [113.09, 29.37],
  '长沙': [113, 28.21],
  '衢州': [118.88, 28.97],
  '廊坊': [116.7, 39.53],
  '菏泽': [115.480656, 35.23375],
  '合肥': [117.27, 31.86],
  '武汉': [114.31, 30.52],
  '大庆': [125.03, 46.58]
}

function convertData(data) {
  let res = []
  for (let i = 0; i < data.length; i++) {
    let geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      res.push({
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}

export default {
  data() {
    return {
      options: {
        tooltip: {
          trigger: 'item'
        },
        geo: {
          map: 'china',
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: 'transparent',
              borderColor: '#3fdaff',
              borderWidth: 1,
              shadowColor: 'rgba(63, 218, 255, 0.5)',
              shadowBlur: 30
            },
            emphasis: {
              areaColor: '#2B91B7',
            }
          }
        },
        series: [
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: val => val[2] / 10,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: '#ddb926'
              }
            }
          },
          {
            name: 'Top 10',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort((a, b) => b.value - a.value).slice(0, 10)),
            symbolSize: val => val[2] / 10,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#f4e925',
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },
            zlevel: 1
          }
        ]
      }
    }
  }
}
</script>
