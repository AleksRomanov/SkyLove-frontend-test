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
</style>
