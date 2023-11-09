<template>
  <div>
    This is a demo component.
    <h2>{{ num }}</h2>
    <span>{{ ename }}</span>
    <h2>{{ comp }}</h2>
    {{ val ? "ON" : "OFF" }}
    <button @click="val = !val">get</button>
  </div>
</template>

<script>
export default {
  name: "DemoComponent",
  data() {
    return {
      num: 55,
      ename: "Rashid",
      val: true,
    };
  },
};
</script>
