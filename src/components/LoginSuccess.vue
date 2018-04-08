<template>
  <div id="app" class="container">
    <NavBar></NavBar>
    <SearchTodo></SearchTodo>
    <CompletedTodos></CompletedTodos>
    <CurrentTodos></CurrentTodos>
    <GetTodo></GetTodo>
  </div>
</template>

<script>
import SearchTodo from './SearchTodo.vue'
import GetTodo from './GetTodo.vue'
import CurrentTodos from './CurrentTodos.vue'
import CompletedTodos from './CompletedTodos.vue'
import NavBar from './NavBar.vue'
import { ModalEvent } from '../EventBus'

export default {
  components: {
    NavBar,
    SearchTodo,
    GetTodo,
    CurrentTodos,
    CompletedTodos
  }
        }
</script>

<style>
body {
  background: #D3CCE3;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #E9E4F0, #D3CCE3);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #E9E4F0, #D3CCE3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
