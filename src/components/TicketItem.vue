<template>
  <li>
    <span>
      {{ index + 1 }}
      {{ ticket.user.name }}
      <strong>{{ ticket.user.email }}</strong>
      <img src="public/favicon.ico" alt="">
    </span>
    <button class="rm"
            v-on:click="$emit('remove-ticket', ticket.ticket_number)">&times;
    </button>
  </li>
</template>

<script>
export default {
  props: {
    ticket: {
      type: Object,
      required: true,
    },
    index: Number
  }
}
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
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
