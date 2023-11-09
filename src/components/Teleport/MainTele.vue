<template>
  <teleport to="#appDuplicate">
    <TelePortVue />
  </teleport>
</template>

<script>
import TelePortVue from "./TelePort.vue";
export default {
  name: "MainTele",
  components: {
    TelePortVue,
  },
};
</script>
