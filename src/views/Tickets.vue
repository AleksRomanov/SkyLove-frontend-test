<template>
  <div>
    <router-link to="/home">Home</router-link>


    <button @submit="showForm" :key="showForm" type="submit" class="ticket-btn-create">Создать</button>
<!--    <button v-on:click="$emit('showForm')" type="submit" class="ticket-btn-create">Создать</button>-->


    <TicketForm
        @user-submitted="addTicket"
    />
    <!--    <Loader v-if="loading"/>-->
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
// import Loader from "@/components/Loader";

export default {
  name: 'Tickets',
  data() {
    return {
      tickets: [
        {
          "user": {
            "name": "Василий Васильев",
            "email": "vasya@gmail.com",
            "message": "Отвратительно!!!"
          },
          "messageType": 'Жалоба на пользователя',
          "status": 0,
          "priority": 2,
          "ticket_number": '1'
        },
        {
          "user": {
            "name": "Пашка Классный",
            "email": "pasha@gmail.com",
            "message": "Это лучшее приложение!"
          },
          "subject": "Оплата",
          "status": 1,
          "priority": 3,
          "ticket_number": '2'
        },
        {
          "user": {
            "name": "Жека Воробьев",
            "email": "jeka@gmail.com",
            "message": "Лучшие!!"
          },
          "status": 3,
          "priority": 5,
          "ticket_number": '3'
        },
      ],
      loading: true
    }
  },
  computed: {},
  methods: {
    removeTicket(ticket_number) {
      this.tickets = this.tickets.filter(i => i.ticket_number !== ticket_number)
    },
    addTicket(user) {
      this.tickets.push(user)
    },
    showForm(event) {
      event.target.classList.add('formShow')
    }
  },
  components: {
    TicketForm,
    TicketList,
    // Loader
  }
}
</script>

<style>

.formShow {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 900px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
}

.ticket-btn-create {
  cursor: pointer;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  min-width: 95px;
  height: 35px;
  background-color: #78cd51;
  border: none;
  border-radius: 5px;
  box-shadow: 0 10px 25px rgba(148, 174, 213, 0.15);
}
</style>
