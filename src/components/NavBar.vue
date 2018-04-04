<template>
<nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand">Vue & Vuex <b>Todo App</b></a>
      </div>
      <p class="navbar-text navbar-right">
          <h6> Hello, <b>{{name}}</b></h6>
          &nbsp;&nbsp;<img :src="photo" style='height: 30px' class="img-circle">
          &nbsp;&nbsp;&nbsp;<a href="#" @click='logOut'><span class="glyphicon glyphicon-log-out"></span>  Log out</a>
      </p>
   </div>
  </nav>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      photo: '',
      userId: '',
      name: '',
      email: '',
      user: {},
    }
  },
  created() {
    var vm = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        vm.user = user;
        vm.name = vm.user.displayName;
        vm.email = vm.user.email;
        vm.photo = vm.user.photoURL;
        vm.userId = vm.user.uid;
      }
    });
  },
    methods: {
      logOut() {
      firebase.auth().signOut();
    }

  }
};
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
}

.img-circle {
    border-radius: 50%;
}

nav {
  color:#595959;
}
</style>
