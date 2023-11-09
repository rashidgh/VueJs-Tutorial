<template>
    <h3>Hello I'm Mount and beforeMount Method</h3>
</template>

<script>
export default {
    name:"BeforeMount&Mount",
    beforeMount(){
        console.log("I'm beforeMount",this.$el);
    },
    mounted(){
        console.log("I'm Mount",this.$el);
    }
}
</script>
