<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <section class="lesson">
      <h2>1. Lesson 1</h2>
      <h4>Can you guess my name ?</h4>
      <p><input v-model="myName" placeholder="Enter something here..."></p>
      <p v-if="myName === 'Giang'">Message is: Yayyy! "{{myName}}" is my name.</p>
      <p v-else>Message is: {{myName}}</p>

      <h4>Calculate the sum of below values:</h4>
      <p><input placeholder="num1" type="number" v-model.number="num1"></p>
      <p><input placeholder="num2" type="number" v-model.number="num2"></p>
      <h4>Result <small>(by Computed property)</small>: {{calculateTotal}}</h4>
      <p>Or try with on click event: <button @click="onClick">Calculate</button></p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Lesson 1',
  props: {
    msg: String
  },
  data: () => ({
    myName: "",
    num1: 0,
    num2: 0
  }),
  computed: {
    calculateTotal: function () {
      return this.num1 + this.num2;
    }
  },
  methods: {
    onClick: function() {
      alert('Total: ' + this.calculateTotal);
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

</style>
