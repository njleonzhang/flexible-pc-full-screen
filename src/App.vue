<template>
  <div id="app">
    <DashBoard/>
  </div>
</template>

<script>
import DashBoard from './components/index.vue'

export default {
  name: 'app',
  components: {
    DashBoard
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
