import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null,
    courses:[]
  },
  mutations: {
    SET_CURRENT_USER(state, user){ state.currentUser = user},
    GET_COURSES(state, courses){state.courses = courses }
  },
  actions: {
    setCurrentUser({commit}, user){
      commit("SET_CURRENT_USER", user)
    },
    getCourses({commit}){
      axios.get('https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses')
           .then((resp)=>{
             commit("GET_COURSES", resp.data)
           })
    }
  },
  modules: {
  }
})
