<template>
    <div id="current-todos" class="container">
        <h5 v-if="todos.length > 0">Current <span class="badge badge-pill badge-secondary">  {{todos.length}}</span> </h5>
        <ul class="list-group">
            <li class="list-group-item" v-for="todo in todos">
              <input type="checkbox" @click="complete(todo)">
                <span name="todoItem">{{todo.body}}</span>
                <br/>
                {{todo.createdAt}}

              <div class="btn-group">
                <button type="button" class="edit-btn" @click="edit(todo)">
                  <span>Edit</span>
                </button>
                &nbsp;&nbsp;&nbsp;
                <button type="button" class="close" @click="remove(todo)" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
             </div>
          </li>
        </ul>
    </div>
</template>
<script>
import { ModalEvent } from '../EventBus'
export default{
    methods: {
        edit(todo){
            this.$store.dispatch('editTodo', todo)
        },
        complete(todo){
            this.$store.dispatch('completeTodo', todo)
        },
        remove(todo){
            this.$store.dispatch('removeTodo', todo)
        }
    },
    computed: {
        todos(){
          ModalEvent.$on('SET_SEARCH_TEXT', text => {
            var objNum = document.getElementsByName("todoItem");
            for (var i = 0, len=objNum.length; i < len; i++) {
              var tmpStr = objNum[i].innerHTML;
              if(tmpStr.toLowerCase().match(text)){
                objNum[i].parentElement.style.display = "block"
              }else{
                objNum[i].parentElement.style.display = "none"
              }
            }
         });
            return this.$store.getters.todos
        }
    }
}
</script>
<style scoped>
    .btn-group{
        float: right;
    }

    .edit-btn{
        padding: 0;
        border: none;
        background: none;
        color: #8c8c8c;
    }
</style>
