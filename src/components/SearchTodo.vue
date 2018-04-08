<template>
    <div id="search-todo" class="container">
        <input class="form-control"
               type="text"
               v-on:input="setSearchText"
               placeholder="Search todos">
        <input type="checkbox"
               id="checkbox"
               v-model="toggle"
               @change="toggleShowCompleted()">  Show completed todo
               <label for="checkbox">? {{toggle}}</label>
    </div>
</template>
<script>
import { ModalEvent } from '../EventBus'
    export default{
    data() {
         return {
         toggle: true //default show completed todos
         }
    },
    methods: {
                toggleShowCompleted(){
                  ModalEvent.$emit('TOGGLE_SHOW_COMPLETED', this.toggle)
                  console.log("search "+this.toggle);
                },setSearchText(e){
                  ModalEvent.$emit('SET_SEARCH_TEXT', e.target.value)
                  console.log("search bar text: "+e.target.value);
                }
            },computed: {
                todos(){
                  return this.$store.getters.completedTodos
              }
          }
        }
</script>
<style scoped>
.container{
  margin: 0.5rem 0rem 2rem 0rem;
}
</style>
