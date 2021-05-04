<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="navbar-menus" v-if="user && user.role == 'ADMIN'">
        <v-btn text @click="goToRegisterInstitution">Registrar institución</v-btn>
      </div>
      <div class="navbar-user-options" v-if="user">
        <v-btn text @click="logout">Cerrar sesión</v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: "App",

  data: () => ({

  }),

  methods: {
    goToRegisterInstitution() {
      this.$router.push('/create-institution');
    },

    logout() {
      this.$store.commit('logout');
      this.$router.push('/');
    }
  },

  computed: {
    ...mapGetters({
      user: 'getSession'
    })
  }
  
};
</script>

<style>
.alert-error {
  margin-top: 2em;
}

.navbar-menus {
  width: 75%;
  max-width: 75%;
}

.navbar-user-options {
  display: grid;
  width: 25%;
  justify-items: end;
}
</style>
