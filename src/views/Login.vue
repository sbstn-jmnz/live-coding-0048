<template>
  <v-app>
    <v-card width="400px" class="mx-auto my-auto">
      <v-card-title class="pb-0">
        <h1 class="mx-auto mb-5">Live Coding Admin</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Usuario" prepend-icon="mdi-account-circle" v-model="user" />
          <v-text-field
            label="Contraseña"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            v-model="password"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="info" @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>
<script>
import { mapActions } from 'vuex'
import firebase from "firebase";
export default {
  data: () => ({
    user: "",
    password: "",
    showPassword: false
  }),
  methods: {
    ...mapActions(["setCurrentUser"]),
    login() {
      firebase.auth()
        .signInWithEmailAndPassword(this.user, this.password)
        .then(() => {
          this.setCurrentUser(firebase.auth().currentUser)
          this.$router.push("/admin");
        })
        .catch(() => {
          alert("no no noooooo");
        });
    }
  }
};
</script>