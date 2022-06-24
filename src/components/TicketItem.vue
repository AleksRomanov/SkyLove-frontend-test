<template>
  <li>
    {{ index + 1 }}
    <span class="ticket-user__data">
         <img width="45" height="45" src="https://lh3.googleusercontent.com/ogw/ADGmqu9mwjd_DnKM_J5VCm0fPeUuIA1p-MU6rR7Fi0wV=s192-c-mo" alt="" />
      {{ ticket.user.name }}
      <strong>{{ ticket.user.email }}</strong>

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
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase()
    }
  }
}
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  /*flex-wrap: wrap;*/
  align-items: center;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  width: 1270px;
  border-radius: 5px;
}

img {
  margin-right: 1rem;
  margin-left: 1rem;
}

.ticket-user__data {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.rm {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}

input {
  margin-right: 1rem;
  margin-left: 1rem;
}
</style>
