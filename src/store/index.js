import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null
  },
  mutations: {
    SET_CURRENT_USER(state, user){ state.currentUser = user}
  },
  actions: {
    setCurrentUser({commit}, user){
      commit("SET_CURRENT_USER", user)
    }
  },
  modules: {
  }
})
