<template>
    <div id="completed-todos" class="container">
        <h5 v-if="completed.length > 0">Completed <span class="badge badge-pill badge-success">  {{completed.length}}</span> </h5>
        <ul class="list-group">
            <li class="list-group-item" v-for="todo in completed">
                <span class="line-through" name="todoItem">{{todo.body}}</span>
                <br/>
                <span class="line-through">{{todo.createdAt}}</span>
                <button type="button" class="close" @click="remove(todo)" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
            </li>
        </ul>
    </div>
</template>
<script>
import { ModalEvent } from '../EventBus'
    export default{
        methods: {
            remove(todo){
                this.$store.dispatch('removeTodo', todo)
            }
        },
        computed: {
            completed(){
                    ModalEvent.$on('TOGGLE_SHOW_COMPLETED', toggle => {
                      //console.log(`Show completed  checked ? ${toggle}`)
                      var obj=document.getElementById("completed-todos")
                      if(toggle==true){
                          obj.style.display = "block"
                      }else{
                          obj.style.display = "none"
                      }
                    });

                    ModalEvent.$on('SET_SEARCH_TEXT', text => {
                    //console.log("======> text "+ text);
                      var objNum = document.getElementsByName("todoItem");
                      for (var i = 0, len=objNum.length; i < len; i++) {
                        var tmpStr = objNum[i].innerHTML;
                        if(tmpStr.toLowerCase().match(text)){
                          console.log("MATCH       !!!!!!!!!!!!! "+objNum[i].innerHTML);
                          document.getElementsByName("todoItem")[i].parentElement.style.display = "block"
                        }else{
                          //objNum[i].style.display = "none"
                          document.getElementsByName("todoItem")[i].parentElement.style.display = "none"
                        }
                     }
                  });
                  return this.$store.getters.completedTodos
                }
            }
      }
</script>
<style scoped>
.line-through {
  text-decoration: line-through;
  color: #808080;
}
</style>
