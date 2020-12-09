<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
       <h2>Live Coding Music Academy</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn v-if="!isLoggedIn"
        text
        to='/admin'
      >
        <span class="mr-2">Admin</span>
        <v-icon>mdi-lock-open</v-icon>
      </v-btn>

      <v-btn v-if="isLoggedIn"
        text
        @click='logout'
      >
        <span class="mr-2">Salir</span>
        <v-icon>mdi-lock-open</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase';
import { mapActions, mapState } from 'vuex'
export default {
  name: 'App',  

  methods:{
    ...mapActions(['setCurrentUser']),
     logout(){
      firebase.auth().signOut().then(()=>{
        this.setCurrentUser(null)
        this.$router.push('/')
      })
    }
  },
  computed:{
    ...mapState(['currentUser']),
    isLoggedIn(){
      return this.currentUser ? true : false
    }
  }
};
</script>
