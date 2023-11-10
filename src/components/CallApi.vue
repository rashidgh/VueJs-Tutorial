<template>
  <h3>Api Call</h3>
  <ul>
    <li v-for="a in item" :key="a">{{a.title}}</li>
    <!-- <li>{{item.map(li=>li)}}</li> -->
    
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
