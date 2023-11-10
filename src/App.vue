<template>
  <CallApiVue />
</template>

<script>
import CallApiVue from "./components/CallApi.vue";
export default {
  name: "App",
  components: {
    CallApiVue,
  },
};
</script>

<style scoped>
div {
  height: 60vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
</style>
