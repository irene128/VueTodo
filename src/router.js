import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import LoginSuccess from './components/LoginSuccess.vue'
//import App from './App.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    { path: '/Login', component: Login },
    { path: '/LoginSuccess', component: LoginSuccess },
  ]
});

export default router;
