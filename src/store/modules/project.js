
import * as types from '../mutation-types'
import api from '../../api';
//项目详情
const detail = {}
const state = {
  detail
}
const mutations = {
  //项目详情
  [types.DETAIL](state,data){
    state.detail = data.data
  }
}
const getters = {
  projectStage: (state) => {
    return '6666666'
  }
}
const actions = {
//项目详情
  async goDetail({commit},projectId){
    let res = await api.projectDetailApi({projectId})
    commit(types.DETAIL,res)
  },
  //概要
  async getSummary({commit},projectId){
    await api.summaryApi({projectId})
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}

