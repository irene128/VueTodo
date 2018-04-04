import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import firebase from 'firebase'
import firebaseui from 'firebaseui';
import VueRouter from 'vue-router'
import router from './router'
import {config} from './helpers/firebaseConfig'
import EventBus from './components/EventBus.vue'

Vue.use(VueRouter)

new Vue({
  router,
  store,
  EventBus,
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        var user = firebase.auth().currentUser;
        var uid;
        user.providerData.forEach(function (profile) {
          uid=profile.uid;
        });
        //console.log("user id    "+uid);
        this.$store.dispatch('startAddUserTodos',uid);
        this.$router.push('/LoginSuccess')
      } else {
        this.$router.push('/Login')
      }
     });
    },
  el: '#app',
  render: h => h(App)
});
