<template lang="html">
<div class="container">
<div class="jumbotron">
  <h2><b><span class="glyphicon glyphicon-list-alt"></span> Vue & Vuex Todo App</b></h2>
<blockquote>
  <p class="desc">This app using Vue Vuex framework, and Bootstrap responsive front-end framework. With Firebase cloud-hosted database, you can login in with Google account and save your own todo items.</p>
</blockquote>
  <span class="label label-primary">Vue</span>
  <span class="label label-primary">Vuex</span>
  <span class="label label-primary">Vue-router</span>
  <span class="label label-primary">Event Bus</span>
  <span class="label label-primary">Firebase</span>
  <span class="label label-primary">BootStrap</span>
  <div id="firebaseui-auth-container"></div>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui'
import {config} from '../helpers/firebaseConfig';
export default {
  name: 'auth',
  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/LoginSuccess',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
      };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
    },
}
</script>
<style scoped>

blockquote{
  border-left: 5px solid #595959;
}
.desc {
  font-size: 16px;
}
</style>
