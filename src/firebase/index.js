import firebase from 'firebase';
//console.log("API_KEY  " +process.env.API_KEY);
try {
  var config = {
    apiKey: "AIzaSyDk3tO2Zz4EoFAjEQQVWJP2anNBpODFZRM",
    authDomain: "vue-todo-app-8e40c.firebaseapp.com",
    databaseURL: "https://vue-todo-app-8e40c.firebaseio.com",
    projectId: "vue-todo-app-8e40c",
    storageBucket: "vue-todo-app-8e40c.appspot.com",
    messagingSenderId: "233884614342"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
/*
var firebaseRef =   firebase.database().ref();
  firebaseRef.set({
    app:{
      name: 'Todo APP',
      version: '2.0.0'
    },
    appName: 'Todo App',
    isRunning: true,
    user:{
      name:'jialin',
      age: 25
    }
  }).then(()=>{
    console.log('set worked!');
  }, (e)=>{
    console.log('set failed');
  })

    firebaseRef.child('app').set({
      name: 'TODO APP'
    });

    */
