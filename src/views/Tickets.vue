<template>
  <div>
    <router-link to="/home">Home</router-link>
    <TicketForm
        @add-ticket="addTicket"
    />
    <Loader v-if="loading"/>
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
  name: 'Tickets',
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
          "body_subject": "Тип обращения",
          "subject": "Оплата",
          "status": 3,
          "priority": 5,
          "ticket_number": 3
        },
      ],
      loading: true
    }
  },
  computed: {
    filteredMessageType() {
      if (this.filter === 'complaint-user') {
        return this.tickets
      }
    }
  },
  methods: {
    removeTicket(ticket_number) {
      this.tickets = this.tickets.filter(i => i.ticket_number !== ticket_number)
    },
    addTicket(user) {
      console.log('LOG')
      console.log(user)
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
