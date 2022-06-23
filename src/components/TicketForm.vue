<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="name" v-model="name">
    <input type="text" placeholder="email" v-model="email">
<!--    <input type="text" placeholder="message" v-model="message">-->
<!--    <input type="text" placeholder="message Type" v-model="messageType">-->
<!--    <input type="text" placeholder="priority" v-model="priority">-->
<!--    <input type="text" placeholder="status" v-model="status">-->
    <button type="submit">Create</button>
    <button type="submit">Cancel</button>
    <hr>
  </form>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  data() {
    return {
      name: '',
      email: '',
      // message: '',
      // messageType: '',
      // priority: '',
      // status: '',
    }
  },
  methods: {
    ...mapMutations(['createTodo']),
    submit() {
      this.createTodo({
        name: this.name,
        email: this.email,
        // message: this.message,
        // messageType: this.messageType,
        // priority: this.priority,
        // status: this.status
      })
    }
  }
}
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
