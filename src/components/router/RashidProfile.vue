<template>
  <h3>Hello I'm {{ profile }}</h3>
</template>
<script>
import { useRoute } from "vue-router";
useRoute;
export default {
  name: "RashidProfile",
  data() {
    return {
      profile: "",
    };
  },
  mounted() {
    const route = useRoute();
    console.log("routes", route.params.name);
    this.profile = route.params.name;
  },
};
</script>
