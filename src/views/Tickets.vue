<template>
  <div>
    <h2>Тикеты</h2>
    <hr>
<!--    <button type="submit">Create</button>-->
    <hr>
    <router-link to="/home">Home</router-link>

    <TicketForm
        @add-ticket="addTicket"
    />
    <TicketList
        v-if="tickets.length"
        v-bind:tickets="tickets"
        @remove-ticket="removeTicket"
    />
    <p v-else>No Tickets!</p>
  </div>
</template>

<script>
import TicketList from '@/components/TicketList'
import TicketForm from "@/components/TicketForm";
import Loader from "@/components/Loader";

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
          "ticket_number": 1
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
          "ticket_number": 2
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
          "ticket_number": 3
        },
      ],
      loading: true
    }
  },
  methods: {
    removeTicket(ticket_number) {
      this.tickets = this.tickets.filter(t => t.ticket_number !== ticket_number)
    },
    addTicket(user) {
      this.tickets.push(user)
    }
  },
  components: {
    TicketForm,
    TicketList,
    Loader
  }
}
</script>
