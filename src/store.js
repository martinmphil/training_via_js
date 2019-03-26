import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sensorsResults: 0,
    functionalProgrammingResults: 0
  },
  mutations: {
    correctSensorsAnswer: state => state.sensorsResults++
  },
  actions: {

  }
})
