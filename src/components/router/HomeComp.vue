<template>
  <h2>I'm Home component</h2>
  <div>
    <h1><router-link to="cart">AddToCart</router-link></h1>
    <h1><router-link to="buynow">BuyNow</router-link></h1>
    <router-link to="profile/rashid">Rashid's Profile</router-link>
    <router-link to="profile/anil">Anil's Profile</router-link>
  </div>
</template>

<script>
export default {
  name: "HomeComp",
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  height: 60vh;
}
h2 {
  text-align: center;
}
a {
  color: red;
  text-decoration: none;
}
</style>
