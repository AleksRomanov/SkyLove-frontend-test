<template>
  <form>
    <label for="name"></label>
    <input type="text" id="name" placeholder="name">
    <button type="submit">Create</button>
    <!--    <input type="text" placeholder="email" v-model="email">-->
    <!--    <input type="text" placeholder="message" v-model="message">-->
    <!--    <input type="text" placeholder="message Type" v-model="messageType">-->
    <!--    <input type="text" placeholder="priority" v-model="priority">-->
    <!--    <input type="text" placeholder="status" v-model="status">-->
    <!--    <button type="submit">Cancel</button>-->
    <!--    <hr>-->
  </form>
</template>

<!--<script>-->
<!--// import {mapMutations} from 'vuex'-->

<!--export default {-->
<!--  // data() {-->
<!--  //   return {-->
<!--  //     name: '',-->
<!--  //     email: '',-->
<!--  //     message: '',-->
<!--  //     messageType: '',-->
<!--  //     priority: '',-->
<!--  //     status: '',-->
<!--  //   }-->
<!--  // }-->
<!--//   methods: {-->
<!--//     ...mapMutations(['createTodo']),-->
<!--//   //   submit() {-->
<!--//   //   //   this.createTodo({-->
<!--//   //   //     name: this.name,-->
<!--//   //   //     email: this.email,-->
<!--//   //   //     // message: this.message,-->
<!--//   //   //     // messageType: this.messageType,-->
<!--//   //   //     // priority: this.priority,-->
<!--//   //   //     // status: this.status-->
<!--//   //   //   })-->
<!--//   //   // }-->
<!--//   // }-->
<!--}-->
<!--</script>-->

<style scoped>
form {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

input {
  display: block;
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
  padding: 10px;
}
</style>
