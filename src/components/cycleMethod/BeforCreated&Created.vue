<template>
  <h3>Helllllo I'm BeforeCreate & Created Method</h3>
  
</template>

<script>
export default {
  beforeCreate() {
    alert("I'm BeforeCreate");
  },
  created() {
    console.log("I'm Created");
  },
};
</script>
