<template>
  <div id="app">
    <h1>Hello Tickets</h1>
    <hr>
    <TicketForm/>
    <TicketList
      v-bind:tickets="tickets"
    />
    <!--    <h2>{{todosCount}}</h2>-->
    <!--    <div class="todo" v-for="todo in allTodos" :key="todo.name"-->
    <!--         v-bind:todo="todo">-->
    <!--      <h2>{{ todo.name }}</h2>-->
    <!--    </div>-->
  </div>
</template>

<script>
import TicketList from '@/components/TicketList'
// import {mapGetters, mapActions} from 'vuex'
import TicketForm from "@/components/TicketForm";

export default {
  name: 'App',
  data() {
    return {
      tickets: [
        {
          "user": {
            "name": "Василий Васильев",
            "email": "vasya@gmail.com",
            "avatar": "https://lh3.googleusercontent.com/ogw/ADGmqu9mwjd_DnKM_J5VCm0fPeUuIA1p-MU6rR7Fi0wV=s192-c-mo"
          },
          "body_subject": "text text",
          "subject": "Оплата",
          "status": 0,
          "priority": 2,
          "ticket_number": 1,
        },
        {
          "user": {
            "name": "Пашка Классный",
            "email": "pasha@gmail.com",
            "avatar": "https://lh3.googleusercontent.com/ogw/ADGmqu9mwjd_DnKM_J5VCm0fPeUuIA1p-MU6rR7Fi0wV=s192-c-mo"
          },
          "body_subject": "text text",
          "subject": "Оплата",
          "status": 1,
          "priority": 3,
          "ticket_number": 2,
        },
        {
          "user": {
            "name": "Жека Воробьев",
            "email": "jeka@gmail.com",
            "avatar": "https://lh3.googleusercontent.com/ogw/ADGmqu9mwjd_DnKM_J5VCm0fPeUuIA1p-MU6rR7Fi0wV=s192-c-mo"
          },
          "body_subject": "text text",
          "subject": "Оплата",
          "status": 3,
          "priority": 5,
          "ticket_number": 3,
        },
      ]
    }
  },
  // computed: mapGetters(["allTodos", "todosCount"]),
  // methods: mapActions(['fetchTodos']),
  // async mounted() {
  //   // await this.$store.dispatch("fetchTodos")
  //   await this.fetchTodos();
  // },
  components: {
    TicketForm,
    TicketList
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

.ticket {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.ticket ul {
  padding: 0;
  display: flex;
  align-content: center;
  justify-content: center;
  list-style: none;
}
</style>
