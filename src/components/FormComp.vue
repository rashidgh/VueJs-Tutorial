<template>
  <h3>Simple Form</h3>
  <form>
    <label for="email">Email</label>
    <input type="email" id="email" v-model="email" /> <br /><br />
    <label for="password">password</label>
    <input type="password" id="password" v-model="pass" /><br /><br />
    <button @click.prevent="logIn">Login</button>
  </form>
</template>

<script>
export default {
  name: "FormComp",
  data() {
    return {
      email: null,
      pass: null,
    };
  },
  methods: {
    logIn() {
      console.log(this.email, this.pass);
      this.email="", this.pass=""
    },
  },
};
</script>
