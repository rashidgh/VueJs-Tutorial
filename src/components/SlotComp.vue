<template>
  <h2>SlotComponent</h2>
  <header><slot /></header>
  <main><slot /></main>
  <footer><slot /></footer>
</template>

<script>
export default {
  name: "SlotComp",
};
</script>
