<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="100" height="100">
    <Lesson1 msg="Welcome to My Vue.js App"/>
  </div>
</template>

<script>
import Lesson1 from './components/Lesson1.vue'

export default {
  name: 'App',
  components: {
    Lesson1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
