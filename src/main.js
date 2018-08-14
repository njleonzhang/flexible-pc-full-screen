import Vue from 'vue'
import App from './App.vue'
import '@/assets/main.scss'
import ECharts from 'vue-echarts'
import chinaMap from '@/assets/china.json'

Vue.config.productionTip = false

ECharts.registerMap('china', chinaMap)
Vue.component('chart', ECharts)

new Vue({
  render: h => h(App)
}).$mount('#app')
