<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ ename }}</h2>
    <li v-for="item in details" :key="item.ename">
      {{ item.ename }} {{ item.comp }}
    </li>
    
    <button @click="getData(city)">Props</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  // !html binding.
  data(){
    return{
      city:"Rashid"
    }
  },
  props: {
    msg: String,
    ename: String,
    getData: Function,
    details: Array,
  },
};
</script>
