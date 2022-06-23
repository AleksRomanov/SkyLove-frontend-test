<template>
  <div>
    <ul>
      <TicketItem
          v-for="(idx) in tickets" :key="idx"
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
