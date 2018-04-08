<template lang="html">
<div class="container">
<b-jumbotron>
  <h1><v-icon class="icon" name="list"></v-icon><b>  Vue & Vuex Todo App</b></h1>
<blockquote>
  <p class="desc">This app using Vue Vuex framework, and Bootstrap responsive front-end framework. With Firebase cloud-hosted database, you can login in with Google account and save your own todo items.</p>
</blockquote>
  <b-badge variant="secondary">Vue</b-badge>
  <b-badge variant="secondary">Vuex</b-badge>
  <b-badge variant="secondary">Vue-router</b-badge>
  <b-badge variant="secondary">Event Bus</b-badge>
  <b-badge variant="secondary">Firebase</b-badge>
  <b-badge variant="secondary">BootStrap</b-badge>
  <div id="firebaseui-auth-container"></div>
</b-jumbotron>
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

.icon {
  width: 40px;
    }
</style>
