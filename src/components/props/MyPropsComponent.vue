<template>
  <div>
    <MyChildComponent
      msg="Welcome"
      :ename="ename"
      :getData="getData"
      :details="details"
    />
  </div>
</template>

<script>
import MyChildComponent from "./MyChildComponent.vue";

export default {
  name: "MyChildComponentVue",
  components: {
    MyChildComponent,
  },
  data() {
    return {
      ename: "Rashid",
      getData: function (name) {
        alert(name);
      },
      details: [
        { ename: "Rashid", comp: "Tyss" },
        { ename: "Raghu", comp: "Apex" },
        { ename: "Ranjan", comp: "Cognizent" },
        { ename: "Aliston", comp: "Apple" },
      ],
    };
  },
};
</script>
