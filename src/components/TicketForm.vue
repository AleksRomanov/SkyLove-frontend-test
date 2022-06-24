<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="user">
    <button type="submit">Create</button>
    <!--    <input type="text" placeholder="email" v-model="email">-->
    <!--    <button type="submit">Create</button>-->
    <!--    <input type="text" placeholder="message" v-model="message">-->
    <!--    <input type="text" placeholder="message Type" v-model="messageType">-->
    <!--    <input type="text" placeholder="priority" v-model="priority">-->
    <!--    <input type="text" placeholder="status" v-model="status">-->
    <!--    <hr>-->
  </form>
</template>

<script>

export default {
  data() {
    return {
      user: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.user.trim()) {
        const newTicket = {
          ticket_number: Date.now(),
          ticket: this.ticket,
          user: this.user,
          // completed: false
        }
        this.$emit('add-ticket', newTicket)
        this.user = ''
      }
    }
  }
}
</script>

<style scoped>
form {
  margin: 0 auto;
  width: 400px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

input {
  display: block;
  width: 400px;
  border: 1px solid #ccc;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
  padding: 10px;
}
</style>
