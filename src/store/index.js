import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reachBottom:false,
    city:'',
    AgencyList:[]
  },
  mutations: {
    changeReachBottom(state,payload){
      state.reachBottom = payload
    },
    changeCity(state,payload){
      state.city = payload
    },
    changeAgencyList(state,payload){
      state.AgencyList = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
