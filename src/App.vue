<template>
  <div id="app">
    <HeaderApp />
    <router-view/>
  </div>
</template>
<script>
import HeaderApp from '@/components/HeaderApp'

export default {
  name: 'App',
  components: {
    HeaderApp
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
