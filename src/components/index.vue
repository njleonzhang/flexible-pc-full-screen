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
    background: yellow;
  }

  .top {
    width: 1920px;
    height: 850px;
    background: blue;
    display: flex;
    flex-direction: row;
  }

  .top-left, .top-right {
    flex: 0 0 420px;
    height: 100%;
    background: purple;
  }

  .top-mid {
    flex: 1 0 auto;
    height: 100%;
    background: green;
  }

  .down {
    width: 1920px;
    height: 230px;
    background: red;
  }

</style>
<template>
  <div class='dashboard'>
    <div class='top'>
      <div class='top-left'></div>
      <div class='top-mid'></div>
      <div class='top-right'></div>
    </div>
    <div class='down'>

    </div>
  </div>
</template>

<script>
export default {
  // async beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //   })
  // },
  data() {
    return {
      isFullScreen: false,
      bar: 'bar',
      line: 'line',
      activeUserData: []
    }
  },
  methods: {
    fullScreen() {
      let dashBoardEle = document.getElementsByClassName('dash-board')
      if (this.isFullScreen) {
        this.exitFullScreen()
      } else {
        this.launchFullScreen(dashBoardEle[0])
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
