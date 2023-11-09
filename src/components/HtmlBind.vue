<template>
  <div v-html="text"></div>
  <h3 :class="{ green: colorFull }">Hello Banglore</h3>
  <button @click="colorFull = !colorFull">Toggle</button>
</template>

<script>
export default {
  name: "HtmlBind",
  data() {
    return {
      text: "<h1>Be Always Cool</h1>",
      colorFull: true,
    };
  },
};
</script>

<style scoped>
.green {
  background-color: rgb(243, 243, 18);
  padding: 10px 20px;
  border-radius: 6px;
}
</style>
