<template>
<b-navbar class="nav">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand">Vue & Vuex <b>Todo App</b></a>
      </div>
      <p class="navbar-right">
          <span class="greeting"> Hello, <b>{{name}}</b>&nbsp;&nbsp;<img :src="photo" style='height: 30px' class="img-circle"></span>
          &nbsp;&nbsp;&nbsp;<a href="#" @click='logOut'><v-icon class="icon" name="log-out"></v-icon>  Log out</a>
      </p>
   </div>
  </b-navbar>
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

.nav {
  background-color: #563d7c;
  color: white;
  margin: 0px 14px 3px 14px;
}
.greeting {
  color: white;
}

.icon {
  width: 20px;
    }

a {
  color: #c9bbdd;
    }

a:hover {
  color: #f1eef7;
  text-decoration: none;
}
</style>
