<template>
  <li>
    {{ index + 1 }}
    <div class="ticket-user__name">
      <img width="45" height="45" src="https://lh3.googleusercontent.com/ogw/ADGmqu9mwjd_DnKM_J5VCm0fPeUuIA1p-MU6rR7Fi0wV=s192-c-mo" alt=""/>
      <span>{{ ticket.user.name }}</span>
      <div class="ticket-user__data">
        <span>{{ ticket.body_subject }}</span>
        <p>{{ ticket.message }}</p>
      </div>
      <!--      <strong>{{ ticket.user.email }}</strong>-->
    </div>
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
  padding: 0 2rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  width: 1270px;
  border-radius: 5px;
}

li:hover {
  transform: scale(1.025);
  transition: all 0.5s;
}

button {
  margin-left: auto;
}

button:hover {
  transform: scale(1.35);
  transition: all 0.5s;
}

img {
  margin-right: 1rem;
  margin-left: 1rem;
}

.ticket-user__name {
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  padding: 1rem;
}

/*.ticket-user__name:before {*/
/*  position: absolute;*/
/*  left: 64%;*/
/*  content: " ";*/
/*  background: #bebebe;*/
/*  width: 2px;*/
/*  height: 50px;*/
/*  !*float: right;*!*/
/*  !*margin-right: 10px;*!*/
/*}*/

.ticket-user__name span {
  margin-right: 3rem;
}

.ticket-user__data {
  border-left: 2px solid rgba(190, 190, 190, 1);
  padding-left: 1rem;
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
