<template>
  <form @submit.prevent="onSubmit">
    <h2>Новый тикет</h2>
    <ul>
      <li>
        <input type="text" id="name" v-model="name">
        <label for="name">Имя:</label>
      </li>
      <li>
        <input type="text" v-model="user.email">
        <label for="name">Email:</label>
      </li>

      <li>
        <label for="name">Имя</label>
      </li>

      <input type="text" placeholder="message" v-model="user.message">
      <input type="text" placeholder="message Type" v-model="user.messageType">
      <select v-model="filter">
        <option value="complaint-user">Жалоба на пользователя</option>
        <option value="complaint-app">Жалоба на приложение</option>
        <option value="complaint-website">Жалоба на сайт</option>
        <option value="payment">Оплата</option>
        <option value="functionality">Функционал</option>
        <option value="authorization">Авторизация</option>
        <option value="moderation">Модерация</option>
        <option value="other">Другое</option>
      </select>
      <input type="text" placeholder="priority" v-model="user.priority">
      <select v-model="filter">
        <option value="low">Низкий</option>
        <option value="medium">Средний</option>
        <option value="high">Высокий</option>
        <option value="critical">Критический</option>
      </select>
      <input type="text" placeholder="status" v-model="user.status">
      <select v-model="filter">
        <option value="new">Новый</option>
        <option value="in-processing">В обработке</option>
        <option value="postponed">Отложено</option>
        <option value="closed">Закрыто</option>
      </select>
    </ul>
    <hr>
    <button type="submit" v-on:change="">Create</button>

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
        const addTicket = {
          ticket_number: Date.now(),
          // ticket: this.ticket,
          user: this.user,
          // completed: false
        }
        this.$emit('add-ticket', addTicket)
        this.user = ''
      }
    }
  },
  addTicket() {
    console.log('LOG')
    console.log(user)
    this.tickets.push(user)
  }
}
</script>

<style scoped>
form {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 400px;
  margin-bottom: 10px;
}

ul {
  list-style: none;
}

input {
  position: relative;
  display: block;
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 2px;
  /*box-sizing: border-box;*/
  padding: 10px;
  margin: 10px;
}

label {
  position: absolute;
  /*top: 0;*/
  left: 0;
  color: red;
}


button {
  background-color: #78cd51;
  border: none;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(148, 174, 213, 0.15);
}

button:hover {
  transform: scale(1.35);
  transition: all 0.5s;
}


</style>
