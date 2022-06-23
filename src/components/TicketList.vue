<template>
  <div>
    <ul>
      <TicketItem
          v-for="(ticket) in tickets" :key="ticket"
          v-bind:ticket="ticket"
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
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
