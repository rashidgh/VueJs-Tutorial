<template>
  //!get Input value
  <!-- <h1>Get Input Value</h1>
  <input type="text" placeholder="enter email" v-model="email" /><br /><br />
  <input
    type="password"
    placeholder="enter Password"
    v-model="password"
  /><br /><br />
  <button @click="getVal()">GetInpVal</button>

  <h4>Selected Input Value:{{ email }} {{ password }}</h4> -->

  //!get CheckBox Value
  <!-- <h2>Get CheckBox Value</h2>
  <label for="Java">Java</label>
  <input type="checkbox" id="Java" value="Java" v-model="technology" /><br />
  <label for="Python">Python</label>
  <input
    type="checkbox"
    id="Python"
    value="Python"
    v-model="technology"
  /><br />
  <label for="JavaScript">JavaScript</label>
  <input
    type="checkbox"
    id="JavaScript"
    value="JavaScript"
    v-model="technology"
  /><br />
  <button @click="getCheckVal()">GetCheckBoxVal</button><br />
  <h3>Selected Technology: {{ technology }}</h3> -->

  // !Get Radio Value
  <h3>Select City</h3>
  <label for="1">Banglore</label>
  <input type="radio" name="city" id="1" value="Banglore" v-model="city" />
  <label for="1">Patna</label>
  <input type="radio" name="city" id="" value="Patna" v-model="city" />
  <button @click="getRadiokVal()">Get City</button>
    <h4>selected City is {{city}}</h4>
</template>

<script>
export default {
  name: "GetInputVal",
  data() {
    return {
      email: null,
      password: null,
      technology: [],
      city:null
    };
  },
  methods: {
    // !Input Val methods
    getVal: function () {
      console.log(this.email, this.password);
      //! Here we are using null for clear input value
      this.email = null;
      this.password = null;
    },
    // !checkBox Val Methods
    getCheckVal: function () {
      console.log(this.technology);
    },

    // !radio Val Methods
    getRadiokVal: function () {
      console.log(this.city);
    },
  },
};
</script>
