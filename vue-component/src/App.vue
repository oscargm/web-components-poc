<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <to-do-app />
  </div>
</template>
<script src="./components/to-do/adaptor.js"></script>
<script>
import ToDo from "./components/to-do/adaptor.js";

export default {
  name: "app",
  components: {
    ToDo
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
