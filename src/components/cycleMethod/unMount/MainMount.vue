<template>
  <div v-if="show"><BeforeUnmountMountVue /></div>
  <button @click="show = !show">Toggle</button>
</template>

<script>
import BeforeUnmountMountVue from "./BeforeUnmount&Mount.vue";
export default {
  name: "MainMount",
  components: {
    BeforeUnmountMountVue,
  },
  data() {
    return {
      show: true,
    };
    
  },
};
</script>
