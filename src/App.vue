<template>
  <div id="app">
    <TodoForm/>
    <h1>{{todosCount}}</h1>
    <div class="todo" v-for="todo in allTodos" :key="todo.name"
         v-bind:todo="todo">
      <h2>{{ todo.name }}</h2>
    </div>
  </div>
</template>

<script>
// import TicketList from '@/components/TicketList'
import {mapGetters, mapActions} from 'vuex'
import TodoForm from "@/components/TodoForm";

export default {
  name: 'App',
  computed: mapGetters(["allTodos", "todosCount"]),
  methods: mapActions(['fetchTodos']),
  async mounted() {
    // await this.$store.dispatch("fetchTodos")
    await this.fetchTodos();
  },
  components: {
    TodoForm
    // TicketList
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
  margin: 60px auto;
  width: 400px;
}

.todo {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.todo ul {
  padding: 0;
  display: flex;
  align-content: center;
  justify-content: center;
  list-style: none;
}
</style>
