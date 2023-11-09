<template>
  <h3 ref="user">Hello I'm Before Mount</h3>
</template>
<script>
export default {
  name: "BeforeUnmount&Mount",
  beforeUnmount() {
    console.log("beforeUnmount",this.$refs['user']);
  },
  unmounted() {
    console.log("Unmount",this.$refs['user']);
  },
};
</script>
