<template>
  <div>
    <h3>Another todo app:</h3>

    <form @submit.prevent="onAddTask">
      <label for="new-todo-input">Add new item to the todo list: </label>
      <input id="new-todo-input" type="text" name="new-todo" placeholder="Enter new Todo here"
             v-model="task"/>
      <button type="submit" class="btn-add">Add task</button>
    </form>

    <p></p>
  </div>
</template>
<script>
export default {
  props: ['onAddTask'],
  data: () => ({
    task: ''
  }),
}
</script>
