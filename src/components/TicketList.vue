<template>
  <div>
    <ul>
      <TicketItem
          v-for="(ticket, i) in tickets" :key="ticket"
          v-bind:ticket="ticket"
          v-bind:index="i"
          v-on:remove-ticket="removeTicket"
      />
    </ul>
  </div>
</template>

<script>
import TicketItem from '@/components/TicketItem'
export default {
  props: ['tickets'],
  components: {
    TicketItem
  },
  methods: {
    removeTicket(ticket_number) {
      this.$emit('remove-ticket', ticket_number)
    },
    addTicket(user) {
      this.tickets.push(user)
    }
  }
}
</script>

<style scoped>
  ul {
    /*display: flex;*/
    display: block;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
