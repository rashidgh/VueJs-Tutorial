<template>
  <PostApiVue />
</template>

<script>
import PostApiVue from "./components/PostApi.vue"
export default {
  name: "App",
  components: {
    PostApiVue,
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
