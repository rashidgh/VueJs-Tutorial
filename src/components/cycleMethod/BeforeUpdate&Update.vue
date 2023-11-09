<template>
  <h3 ref="count">{{ count }}</h3>
  <button @click="count=count+1">Increment</button>
  <button @click="count=count-1">Decrement</button>
</template>

<script>
export default {
  name: "BeforeUpdate&Update",

  beforeUpdate() {
    console.log("beforeUpdate", this.$refs["count"].textContent);
  },
  updated() {
    console.log("Update", this.$refs["count"].textContent);
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
