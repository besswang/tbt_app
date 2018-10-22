import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import project from './modules/project'
import getters from './getters'
import * as types from "./mutation-types";

Vue.use(Vuex)

// const state = {
//   count:10
// }
// const mutations = {
//   [types.ADD](state){
//     state.count++
//   }
// }
// const actions = {
//   add({commit}){
//     commit(types.ADD)
//   }
// }
const state = {
  isLoading: false
};
const mutations = {
  updateLoadingStatus (state, payload) {
    state.isLoading = payload.isLoading
  }
}
const index = new Vuex.Store({
   state,
   mutations,
  // actions,
  getters,
  modules: {
    user,
    project
  }
})

export default index
