<template>
  <li>
    <span v-bind:class="{done: ticket.completed}">
      <input type="checkbox">
      <strong>{{ ticket.user.email }}</strong>
      {{ ticket.user.name }}
    </span>
    <button class="rm"
            v-on:click="$emit('remove-ticket', ticket.ticket_number)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    ticket: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
  width: 500px;
  border-radius: 5px;
}

.done {
  text-decoration: line-through;
}

.rm {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}

input {
  margin-right: 1rem;
}
</style>
