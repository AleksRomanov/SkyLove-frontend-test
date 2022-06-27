<template>
  <div>
    <router-link to="/home">Home</router-link>
    <button @click="showForm" class="ticket-btn-create">Создать Тикет</button>
    <TicketForm ref="formShow"
                @user-submitted="addTicket"
                :isVisible="isVisible"
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
      loading: true,
      isVisible: false
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
    showForm() {
      this.$root.$emit('showForm', !this.isVisible)
      // this.$refs.formShow.$el.classList.add('formShow')
      // console.dir(this.$refs.formShow)
    }
  },
  components: {
    TicketForm,
    TicketList,
    // Loader
  }
}
</script>

<style scoped>

.formShow {
  display: flex;
  margin: 0 auto;
  width: 900px;
  border: 1px solid #ccc;
  border-radius: 10px;
  z-index: 10;
}

.formShow:before {
  content: '';
  position: fixed;
  transform: translateX(-50%) translateY(-50%);
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
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
