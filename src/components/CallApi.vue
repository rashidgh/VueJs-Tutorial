<template>
  <h3>Api Call</h3>
  <ul v-for="a in item" :key="a">
    <li >{{a.title}}</li>
    <li>{{a.id}}</li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  name: "CallApi",
  data(){
    return{
        item:[],
    }
  },
  async mounted() {
    let data =await axios.get('https://fakestoreapi.com/products');
    console.log(data.data);
    this.item=data.data;
    // data.data.map(li=>this.item.push(li.title));
    // data.data.map(li=>console.log(li.title))
  },
};
</script>
