<template>
  <h3>{{ val ? "I'm ture" : "I'm false" }}</h3>
  <button @click="val = !val">Toggle</button>
</template>

<script>
export default {
  name: "IfElse",
  data() {
    return { val: true };
  },
};
</script>
