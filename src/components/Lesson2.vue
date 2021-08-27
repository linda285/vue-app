<template>
  <div class="container">
    <section class="lesson">
      <h2>2. Lesson 2</h2>
      <p>I have a todo list:</p>
      <ul id="todoList">
        <li v-for="todo in todoItems" :key="todo.id">
          {{ todo.id }}. {{ todo.title }} ( Completed = {{ todo.completed }})
        </li>
      </ul>

    </section>
  </div>
</template>

<script>
export default {
  name: 'Lesson 2',
  data: () => ({
    todoItems: [{
      id: 1,
      title: 'Todo task A',
      completed: true,
    }, {
      id: 2,
      title: 'Todo task B',
      completed: true,
    }, {
      id: 3,
      title: 'Todo task C',
      completed: false,
    }, {
      id: 4,
      title: 'Todo task D',
      completed: false,
    }],
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#todoList li {
    display: block;
}
</style>
