<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="100" height="100">
    <Lesson1 msg="Welcome to My Vue.js App"/>
    <Lesson2 />
  </div>
</template>

<script>
import Lesson1 from './components/Lesson1.vue'
import Lesson2 from './components/Lesson2'

export default {
  name: 'App',
  components: {
    Lesson1,
    Lesson2
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
.lesson {
  width: 400px;
  margin: 0 auto 40px;
  text-align: left;
}
</style>
