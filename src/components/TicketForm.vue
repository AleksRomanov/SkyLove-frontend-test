<template>
  <form @submit.prevent="onSubmit">
    <h2>Новый тикет</h2>
    <div class="form-group">
      <label for="name" class="form-label">Имя:</label>
      <input
          id="name"
          class="form-input"
          :class="$v.form.name.$error ? 'is-invalid' : ''"
          v-model.trim="form.name"
      >
<!--      <p v-if="$v.name.$dirty && $v.name.required" class="invalid-feedback">Обязательное поле</p>-->
<!--      <p v-if="$v.name.$dirty && $v.name.minLength" class="invalid-feedback">Здесь должно быть больше 5-и символов</p>-->
    </div>
    <div class="form-group">
      <label for="email" class="form-label">Email:</label>
      <input
          id="email"
          class="form-input"
          v-model.trim="form.email"
      >
    </div>
    <div class="form-group">
      <label for="message" class="form-label">Сообщение:</label>
      <input
          id="message"
          class="form-input"
          v-model.trim="form.message"
      >
    </div>
    <div class="form-group">
      <label for="messageType" class="form-label">Тип обращения:</label>
      <select id="messageType" class="form-input" v-model="form.messageType">
        <option
            v-for="(messageType, index) in messagesTypes"
            :value="messageType.value"
            :key="index"
        >
          {{ messageType.label }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="priority" class="form-label">Приоритет:</label>
      <select id="priority" class="form-input" v-model="form.priority">
        <option
            v-for="(priority, index) in priorities"
            :value="priority.value"
            :key="index"
        >
          {{ priority.label }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="status" class="form-label">Статус:</label>
      <select id="status" class="form-input" v-model="form.status">
        <option
            v-for="(status, index) in statuses"
            :value="status.value"
            :key="index"
        >
          {{ status.label }}
        </option>
      </select>
    </div>
    <button type="submit" class="form-btn-create" v-on:change="">Создать</button>
    <button type="reset" class="form-btn-cancel" v-on:change="">Отмена</button>

  </form>
</template>

<script>
import {validationMixin} from 'vuelidate'
import {required, minLength, email} from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
        messageType: 'Complaint-user',
      },

      messagesTypes: [
        {
          label: 'Жалоба на пользователя',
          value: 'Complaint-user'
        },
        {
          label: 'Жалоба на приложение',
          value: 'Complaint-app'
        },
        {
          label: 'Жалоба на сайт',
          value: 'Complaint-website'
        },
        {
          label: 'Оплата',
          value: 'Payment'
        },
        {
          label: 'Функционал',
          value: 'Functionality'
        },
        {
          label: 'Авторизация',
          value: 'Authorization'
        },
        {
          label: 'Модерация',
          value: 'Moderation'
        },
        {
          label: 'Другое',
          value: 'Other'
        },
      ],
      priority: 'Low',
      priorities: [
        {
          label: 'Низкий',
          value: 'Low'
        },
        {
          label: 'Средний',
          value: 'Medium'
        },
        {
          label: 'Высокий',
          value: 'High'
        },
        {
          label: 'Критический',
          value: 'Critical'
        },
      ],
      status: 'New',
      statuses: [
        {
          label: 'Новый',
          value: 'New'
        },
        {
          label: 'В обработке',
          value: 'in-processing'
        },
        {
          label: 'Отложено',
          value: 'Postponed'
        },
        {
          label: 'Закрыто',
          value: 'Closed'
        },
      ]
    }
  },
  validations: {
    form: {
      name: {required, minLength: minLength(5)},
      email: {required, email}
    }
  },
  // this.$v.form.$touch(),
  methods: {
    onSubmit() {
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        console.log('Валидация прошла успешно')
        //   const addTicket = {
        //     ticket_number: Date.now(),
        //     // ticket: this.ticket,
        //     user: this.user,
        //     // completed: false
        //   }
        //   this.$emit('add-ticket', addTicket)
        //   this.user = ''
      }
    }
  }
  // addTicket() {
  //   console.log('LOG')
  //   console.log(user)
  //   this.tickets.push(user)
  // }
}
</script>

<style scoped>
h2 {
  margin-right: auto;
}

form {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 900px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
}

.form-group {
  position: relative;
}

.form-input {
  position: relative;
  /*display: block;*/
  width: 900px;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 25px;
}

.form-label {
  position: absolute;
  left: 0;
  top: -18px;
  font-size: 14px;
  color: #a4a8b1;
}


.form-btn-create {
  margin-right: 10px;
  min-width: 95px;
  height: 35px;
  background-color: #78cd51;
  border: none;
  border-radius: 5px;
  box-shadow: 0 10px 25px rgba(148, 174, 213, 0.15);
  /*justify-content: flex-start;*/
  /*margin-right: auto;*/
}

.form-btn-cancel {
  background-color: #f67a6e;
  min-width: 95px;
  height: 35px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 10px 25px rgba(148, 174, 213, 0.15);
  /*margin-right: auto;*/
}

button:hover {
  transform: scale(1.05);
  transition: all 0.5s;
}


</style>
