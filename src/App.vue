<template>
  <div id="app">
    <h1>Приложение "Тикеты"</h1>
    <hr>
    <router-link to="/tickets">TICKETS!!!</router-link>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*background-color: ;*/
  /*margin: 60px auto;*/
  /*border: 1px solid #ccc;*/
}

.app-btn-create {
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
</style>
