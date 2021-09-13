<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="100" height="100">
    <h1>Welcome to My Vue.js App</h1>
    <Lesson1 heading="Lession 1"/>
    <Lesson2 heading="Lession 2 - Todo list"/>
  </div>
</template>

<script>
import Lesson1 from './components/Lesson1'
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
  width: 500px;
  margin: 0 auto 40px;
  text-align: left;
}
</style>
