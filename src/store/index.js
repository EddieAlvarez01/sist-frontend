import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: localStorage.getItem('session') || null
  },
  getters: {
    getSession(state) {
      if(state.user) return JSON.parse(state.user);
      return null;
    }
  },
  mutations: {
    login(state, user) {
      let userJsonString = JSON.stringify(user);
      localStorage.setItem('session', userJsonString);
      state.user = userJsonString;
    },

    logout(state) {
      localStorage.removeItem('session');
      state.user = null;
    }
  },
  actions: {},
  modules: {},
});
