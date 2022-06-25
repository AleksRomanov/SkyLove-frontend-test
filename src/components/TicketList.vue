<template>
  <div>
    <ul>
      <TicketItem
          v-for="(ticket, idx) in tickets" :key="idx"
          :ticket="ticket"
          :index="idx"
          @remove-ticket="removeTicket"
      />
    </ul>
  </div>
</template>

<script>
import TicketItem from '@/components/TicketItem'
export default {
  components: {
    TicketItem
  },
  props: ['tickets'],
  methods: {
    removeTicket(ticket_number) {
      this.$emit('remove-ticket', ticket_number)
    },
    // addTicket(user) {
    //   this.tickets.push(user)
    //   console.log('LLLLOOOGGGGGGG!!!!')
    //   console.log(user)
    // }
  }
}
</script>

<style scoped>
  ul {
    /*display: flex;*/
    display: block;
    /*flex-wrap: wrap;*/
    /*align-content: center;*/
    /*align-items: center;*/
    /*justify-content: center;*/
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
