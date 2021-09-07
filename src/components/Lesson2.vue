<template>
  <div class="container">
    <section class="lesson">
      <h2>2. Lesson 2 - Todo list</h2>
      <p>I have a todo list:</p>
      <ul id="todoList">
        <li v-for="(todo, index) in todoItems" :key="`todo-${index}`" :class="{completed: todo.completed}">
          {{ todo.id }}. {{ todo.title }} - {{todo.completed ? "Done" : "Not done"}}
        </li>
      </ul>
      <div>
        <input type="text" :value="newTodo.id" @input="onChangeId($event)" placeholder="Enter the id">
        <input type="text" :value="newTodo.title" @input="onChangeTitle($event)">
        <input type="checkbox" id="checkbox1" @input="onChangeStatus($event)">
        <label for="checkbox1">{{checked ? "Done" : "Not done"}}</label>
      </div>
      <div><button @click="addTodo">Add</button></div>
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
    newTodo: {id: "", title: "New todo", completed: false},
    checked: false
  }),
  methods: {
    onChangeTitle(event) {
      this.newTodo.title = event.target.value;
    },
    onChangeId(event) {
      this.newTodo.id = event.target.value;
    },
    onChangeStatus(event) {
      this.checked = event.target.checked;
    },
    addTodo() {
      // this.todoItems.push(this.newTodo); // Cach 1
      this.todoItems = [...this.todoItems, this.newTodo]
    }
  }
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
