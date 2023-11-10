<template>
  <h3>Post Api</h3>
  <input type="text" name="email" v-model="email" />
  <input type="text" name="password" v-model="password" />
  <button @click="addUser()">send</button>
</template>

<script>
import axios from "axios";
export default {
  name: "PostApi",
  data() {
    return {
      email: null,
      password: null,
    };
  },

  methods: {
    async addUser() {
      console.log(this.email, this.password);
      let result = await axios.post("https://reqres.in/api/users?page=1", {
        email: this.email,
        password: this.password,
      });
      console.log(result);
    },
  },
};
</script>
