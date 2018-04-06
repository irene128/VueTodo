import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment';
import uuid from 'uuid';
import firebase, {firebaseRef} from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [],
        newTodo: '',
        createdAt: ''
    },
    mutations: {
        GET_TODO(state, todo){
            state.newTodo =  todo
        },
        ADD_TODO(state){
            var message = 'Created ';
            var timestamp = moment().unix();
            var createdStr = message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');

            var user = firebase.auth().currentUser;
            var uid;
            if (user != null) {
                user.providerData.forEach(function (profile) {
                //console.log("Sign-in provider: " + profile.providerId);
                //console.log("  Provider-specific UID: " + profile.uid);
                uid=profile.uid;
                //console.log("  Name: " + profile.displayName);
                //console.log("  Email: " + profile.email);
                //console.log("  Photo URL: " + profile.photoURL);
              });
            }

            var firebaseRef = firebase.database().ref();
            var todoId = uuid();
            var todo = ({
              id: todoId,  // ID generate by uuid
              body: state.newTodo,
              completed: false,
              createdAt: createdStr
            })
            state.todos.push(todo)

            firebaseRef.child(`users/${uid}/todos/${todoId}`).set({
              id: todoId,  // ID generate by uuid
              body: state.newTodo,
              completed: false,
              createdAt: createdStr
            });
        },
        EDIT_TODO(state, todo){
            var todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
            state.todos = todos
            state.newTodo = todo.body
        },
        REMOVE_TODO(state, todo){
            var todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
        },
        COMPLETE_TODO(state, todo){
            var message = 'Completed ';
            var timestamp = moment().unix();
            var createdStr = message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
            todo.completed = !todo.completed,
            todo.createdAt = createdStr
            //console.log("id=========> "+todo.id);
            var firebaseRef = firebase.database().ref();
            var id=todo.id;
            var user = firebase.auth().currentUser;
            var uid;
            if (user != null) {
              user.providerData.forEach(function (profile) {
                //console.log("Sign-in provider: " + profile.providerId);
                //console.log("  Provider-specific UID: " + profile.uid);
                uid=profile.uid;
                //console.log("  Name: " + profile.displayName);
                //console.log("  Email: " + profile.email);
                //console.log("  Photo URL: " + profile.photoURL);
              });
            }
            //update
            firebaseRef.child(`users/${uid}/todos/${id}`).child('completed').set(todo.completed);
            firebaseRef.child(`users/${uid}/todos/${id}`).child('createdAt').set(todo.createdAt);
        },
        START_ADD_USER_TODOS(state, userid){
            const uid = userid;
            //console.log("Your user id : "+uid+", fetch data from firebase!");
            var firebaseRef = firebase.database().ref();
            var todosRef = firebaseRef.child(`users/${uid}/todos`);

            todosRef.once('value').then((snapshot) => {
              var todos = snapshot.val() || {};
              var parsedTodos = [];

              Object.keys(todos).forEach((todoId) => {
                console.log("Your todo item's id: "+todoId);
                var currTodo = ({
                  id: todos[todoId].id,
                  body: todos[todoId].body,
                  completed: todos[todoId].completed,
                  createdAt: todos[todoId].createdAt
                })
                state.todos.push(currTodo)
              });
            });
        },
        CLEAR_TODO(state){
            state.newTodo = ''
        }
    },
    actions: {
        startAddUserTodos({commit}, todo){
            commit('START_ADD_USER_TODOS', todo)
        },
        getTodo({commit}, todo){
            commit('GET_TODO', todo)
        },
        addTodo({commit}){
            commit('ADD_TODO')
        },
        editTodo({commit}, todo){
            commit('EDIT_TODO', todo)
        },
        removeTodo({commit}, todo){
            commit('REMOVE_TODO', todo)
        },
        completeTodo({commit}, todo){
            commit('COMPLETE_TODO', todo)
        },
        clearTodo({commit}){
            commit('CLEAR_TODO')
        }

    },
    getters: {
        newTodo: state => state.newTodo,
        todoCreated : state => state.createdAt,
        todos: state => state.todos.filter((todo) => {return !todo.completed}),
        completedTodos: state => state.todos.filter((todo) => {return todo.completed})
    }

})
