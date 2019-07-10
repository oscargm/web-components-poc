<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <to-do-app :todos="todos" />
  </div>
</template>
<script>
import "./components/to-do/to-do-app";

export default {
  name: "app",
  data: function() {
    return {
      todos: [
        { text: "Native WC", checked: true },
        { text: "React WC", checked: false },
        { text: "VueJS WC", checked: false },
        { text: "Svelte WC", checked: false },
        { text: "Angular WC", checked: false }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
