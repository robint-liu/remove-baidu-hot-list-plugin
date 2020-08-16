<template>
  <div id="app">
    <HiddenHotList />
  </div>
</template>

<script>
import HiddenHotList from "./components/HiddenHotList.vue";

export default {
  name: "App",
  components: {
    HiddenHotList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
