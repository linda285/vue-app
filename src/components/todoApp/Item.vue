<template>
  <div>
    <input type="checkbox" class="todo-check" id="todo-check" v-model="task.done">
    <label for="todo-check" :class="{done: task.done}">{{task.name}}</label>
  </div>
</template>
<script>
export default {
  props: ['task']
}
</script>
<style scoped>
.done {
  text-decoration: line-through;
}
</style>