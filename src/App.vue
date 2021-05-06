<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="header-box">
        <div class="navbar-menus">
          <div v-if="user && user.role == 'ADMIN'">
            <v-btn text @click="goToRegisterInstitution">Registrar institución</v-btn>
            <v-btn text @click="goToCreateAccount">Crear cuenta nueva</v-btn>
            <v-btn text @click="goToReportOne">Reporte Operaciones</v-btn>
            <v-btn text @click="goToReportTwo">Reporte Totales</v-btn>
            <v-btn text @click="goToReportThree">Reporte Cuentahabientes</v-btn>
            <v-btn text @click="goToReportFour">Reporte Instituciones</v-btn>
            <v-btn text @click="goToReportFive">Reporte Operaciones Mes</v-btn>
          </div>
        </div>
        <div class="navbar-user-options" v-if="user">
          <v-btn text @click="logout">Cerrar sesión</v-btn>
        </div>
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
    },

    goToCreateAccount() {
      this.$router.push('/create-account');
    },

    goToReportOne() {
      this.$router.push('/report-one');
    },

    goToReportTwo() {
      this.$router.push('/report-two');
    },

    goToReportThree() {
      this.$router.push('/report-three');
    },

    goToReportFour() {
      this.$router.push('/report-four');
    },

    goToReportFive() {
      this.$router.push('/report-five');
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
.header-box {
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 90% 10%;
}

.alert-error {
  margin-top: 2em;
}

.navbar-user-options {
  width: 25%;
}
</style>
