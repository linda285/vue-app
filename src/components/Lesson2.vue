<template>
  <div class="container">
    <section class="lesson">
      <h2>2. {{ heading }}</h2>
      <p>I have a todo list:</p>
      <ul id="todoList">
        <li v-for="(todo, index) in todoItems" :key="`todo-${index}`" :class="todo.completed ? 'completed' : ''">
          <div>{{ todo.id }}. {{ todo.title }}</div>
          <input type="checkbox" :id="`checkbox-todo-${index}`" :checked="todo.completed" @input="markAsDone(todo)">
          <button type="button" class="btn-remove" @click="deleteItem(todo)">Remove</button>
        </li>
      </ul>
<!--      <div>-->
<!--        <input type="text" :value="newTodo.id" @input="onChangeId($event)" placeholder="Enter the id">-->
<!--        <input type="text" :value="newTodo.title" @input="onChangeTitle($event)">-->
<!--        <input type="checkbox" id="checkbox1" @input="onChangeStatus($event)">-->
<!--        <label for="checkbox1">{{checked ? "Done" : "Not done"}}</label>-->
<!--      </div>-->
<!--      <div><button @click="addTodo">Add</button></div>-->

      <form @submit.prevent="onSubmit">
        <label for="new-todo-input">Add new item to the todo list: </label>
        <input id="new-todo-input" type="text" name="new-todo" placeholder="Enter new Todo here"
                v-model="newItem"/>
        <button type="submit" class="btn-add">Add</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Lesson2',
  props: {
    heading: String
  },
  data: () => ({
    checked: false,
    newItem: '',
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
    }]
  }),
  methods: {
    // onChangeTitle(event) {
    //   this.newTodo.title = event.target.value;
    // },
    // onChangeId(event) {
    //   this.newTodo.id = event.target.value;
    // },
    // onChangeStatus(event) {
    //   this.checked = event.target.checked;
    //   this.newTodo.completed= event.target.checked;
    // },
    // addTodo() {
    //   // this.todoItems.push(this.newTodo); // Cach 1
    //   this.todoItems = [...this.todoItems, this.newTodo]
    // },
    markAsDone(item) {
      item.completed = !item.completed;
    },
    deleteItem(item) {
      var index = this.todoItems.indexOf(item);
      this.todoItems.splice(index, 1);
    },
    onSubmit() {
      // var lastitem = this.todoItems[this.todoItems.length - 1];
      this.todoItems.push({id: this.todoItems.length + 1, title: this.newItem, completed: false});
      this.newItem = '';
      console.log("Submitted form");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

#todoList {
  width: 260px;

  li {
    display: flex;
    margin: 0 0 5px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;

    &.completed {
      > div {
        text-decoration: line-through;
      }
    }
  }
}

#new-todo-input {
  margin-right: 5px;
  height: 30px;
  box-sizing: border-box;
}

form {
  .btn-add {
    padding: 0 15px;
    height: 30px;
  }

  label {
    display: block;
    padding-bottom: 5px;
  }
}
</style>
