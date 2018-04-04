<template>
    <div id="get-todo" class="container">
        <input class="form-control"
               :value="newTodo"
               @change="getTodo"
               @keyup.enter="addTodo"
               placeholder="what do you need todo?">
        <button class="btn btn-primary" @click="addTodo" >Add Todo </button>
    </div>
</template>
<script>
export default{
    methods: {
        getTodo(e){
            this.$store.dispatch('getTodo', e.target.value)
        },
        addTodo(obj){
        //alert(obj.target.value.length +"  "+obj.target.value)
            this.$store.dispatch('addTodo')
            this.$store.dispatch('clearTodo')
            }
    },
    computed: {
        newTodo(){
            return this.$store.getters.newTodo
        }
    }
}
</script>
