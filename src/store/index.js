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
    },
    deleteCourse({dispatch},id){
      axios.delete(`https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses/${id}`)
           .then(()=>{
             dispatch("getCourses")
           })
    },
    createCourse({dispatch}, course){
      axios.post('https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses', course)
           .then(()=>{
              dispatch("getCourses")
            })
    },
    updateCourse({dispatch}, course){
      axios.put(`https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/courses/${course.id}`, course)
          .then(()=>{
              dispatch("getCourses")
            })
    }
  },
  modules: {
  }
})
