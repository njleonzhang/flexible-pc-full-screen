<style lang="scss" scoped>
  .dashboard {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 1920px;
    height: 1080px;

    & > div {
      position: absolute;
      border: solid 1px rgba(255, 255, 255, 0.2);
    }
  }

  .title {
    top: 50px;
    left: 30px;
    font-size: 40px;
    color: white;
  }

  .doughnut {
    top: 150px;
    left: 30px;
    width: 400px;
    height: 300px;
    border: solid 1px rgba(255, 255, 255, 0.2);
  }

  .point {
    top: 470px;
    left: 30px;
    width: 400px;
    height: 370px;
    border: solid 1px rgba(255, 255, 255, 0.2);
  }

  .line {
    left: 30px;
    bottom: 35px;
    width: 555px;
    height: 148px;
  }

  .map {
    left: 550px;
    top: 152px;
    width: 850px;
    height: 715px;
  }

  .bar {
    left: 680px;
    bottom: 35px;
    width: 555px;
    height: 148px;
  }

  .pie-char {
    right:30px;
    top: 100px;
    width: 390px;
    height: 300px;
    border: solid 1px rgba(255, 255, 255, 0.2);
  }

  .gauge {
    top: 420px;
    right: 30px;
    width: 390px;
    height: 420px;
    border: solid 1px rgba(255, 255, 255, 0.2);
  }

  .double-line {
    right: 30px;
    bottom: 35px;
    width: 555px;
    height: 148px;
  }

  .fullscreen-button {
    top: 20px;
    width: 200px;
    height: 40px;
    font-size: 25px;
    color: white;
    right: 30px;
    border-radius: 8px;
    color: #E9D70C;
  }

</style>
<template>
  <div class='dashboard'>
    <div class='title'>Dashboard</div>
    <div class='fullscreen-button' @click='toggleFullscreen'>toggle fullscreen</div>
    <div class='doughnut'>
      <doughnut></doughnut>
    </div>
    <div class='point'>
      <point></point>
    </div>
    <div class='line'>
      <line-chart></line-chart>
    </div>
    <div class='line-y-ca'></div>
    <div class='map'>
      <Map></Map>
    </div>
    <div class='bar'>
      <bar></bar>
    </div>
    <div class='pie-char'>
      <pie></pie>
    </div>
    <div class='gauge'>
      <gauge></gauge>
    </div>
    <div class='double-line'>
      <double-line></double-line>
    </div>
  </div>
</template>

<script>
import Doughnut from '@/components/charts/Doughnut'
import Point from '@/components/charts/Point'
import LineChart from '@/components/charts/Line'
import Map from '@/components/charts/Map'
import Bar from '@/components/charts/Bar'
import Pie from '@/components/charts/Pie'
import Gauge from '@/components/charts/Gauge'
import DoubleLine from '@/components/charts/DoubleLine'

export default {
  components: {
    Doughnut,
    Point,
    Map,
    LineChart,
    Bar,
    Pie,
    Gauge,
    DoubleLine
  },
  data() {
    return {
      isFullScreen: false,
    }
  },
  methods: {
    toggleFullscreen() {
      if (this.isFullScreen) {
        this.exitFullScreen()
      } else {
        this.launchFullScreen(document.documentElement)
      }
      this.isFullScreen = !this.isFullScreen
    },
    launchFullScreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      }
    },
    exitFullScreen() {
      if (document.exitFullscreen) {
        document.exitFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }
  }
}
 </script>
