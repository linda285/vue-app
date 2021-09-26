<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="100" height="100">
    <h1>Welcome to My Vue.js App</h1>
    <Lesson1 heading="Lession 1"/>
    <Profile />
    <add-item onAddTask="addTask"/>
    <todo-list :tasks="tasks" />
  </div>
</template>

<script>
import Lesson1 from './components/Lesson1'
import AddItem from './components/todoApp/AddItem'
import TodoList from './components/todoApp/TodoList'
import Profile from './components/Profile'

export default {
  name: 'App',
  data() {
    return {
      tasks: []
    }
  },
  components: {
    Lesson1,
    AddItem,
    TodoList,
    Profile
  },
  methods: {
    addTask(name) {
      this.tasks.push({ name: name, done: false})
    }
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
