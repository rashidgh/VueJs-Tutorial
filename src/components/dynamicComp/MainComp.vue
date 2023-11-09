<template>
  <h1>Dynamic Component</h1>
  <button @click="tab = 'JavaVue'">Load Java</button>
  <button @click="tab = 'JsVue'">Load Js</button>
  <button @click="tab = 'PhpVue'">Load Php</button>
  <component :is="tab" />
</template>

<script>
import JavaVue from "./JavaComp.vue";
import JsVue from "./JsComp.vue";
import PhpVue from "./PhpComp.vue";
export default {
  name: "MainComp",
  data() {
    return{
        tab: ""
    }
  },
  components: {
    JavaVue,
    JsVue,
    PhpVue,
  },
};
</script>
