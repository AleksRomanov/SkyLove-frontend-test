<template>
  <div>
    <ul>
      <TicketItem
          v-for="(ticket) in tickets" :key="ticket"
          v-bind:ticket="ticket"
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
    }
  }
}
</script>

<style scoped>
  ul {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
