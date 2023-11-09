<template>
  <div>
    <input type="text" ref="demo" />
    <button @click="focusInput">Focus</button>
  </div>
</template>

<script>
export default {
  name: "RefComp",
  methods: {
    focusInput() {
      this.$refs.demo.style.background = "red";
    },
  },
};
</script>
