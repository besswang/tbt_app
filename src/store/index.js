import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)


const index = new Vuex.Store({
  getters,
  modules: {
    user
  }
})

export default index
