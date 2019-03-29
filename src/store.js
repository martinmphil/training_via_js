import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalNbrQuestionsSensors: 4,
    correctAnswerTallySensors: 0,
    wrongAnswerTallySensors: 0,
    totalNbrQuestionsFunctionalProgramming: 7,
    correctAnswerTallyFunctionalProgramming: 0,
    wrongAnswerTallyFunctionalProgramming: 0
  },
  mutations: {
    correctAnswerSensors: state => state.correctAnswerTallySensors++,
    wrongAnswerSensors: state => state.wrongAnswerTallySensors++,
    correctAnswerFunctionalProgramming: state => state.correctAnswerTallyFunctionalProgramming++,
    wrongAnswerFunctionalProgramming: state => state.wrongAnswerTallyFunctionalProgramming++
  },
  actions: {

  }
})
