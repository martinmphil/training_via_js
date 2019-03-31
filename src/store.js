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
    CORRECT_ANSWER_SENSORS (state) {
      state.correctAnswerTallySensors++
    },
    WRONG_ANSWER_SENSORS (state) {
      state.wrongAnswerTallySensors++
    },
    CORRECT_ANSWER_FUNCTIONAL_PROGRAMMING (state) {
      state.correctAnswerTallyFunctionalProgramming++
    },
    WRONG_ANSWER_FUNCTIONAL_PROGRAMMING (state) {
      state.wrongAnswerTallyFunctionalProgramming++
    }
  },
  actions: {
    correctAnswerSensors (context) {
      context.commit('CORRECT_ANSWER_SENSORS')
    },
    wrongAnswerSensors (context) {
      context.commit('WRONG_ANSWER_SENSORS')
    },
    correctAnswerFunctionalProgramming (context) {
      context.commit('CORRECT_ANSWER_FUNCTIONAL_PROGRAMMING')
    },
    wrongAnswerFunctionalProgramming (context) {
      context.commit('WRONG_ANSWER_FUNCTIONAL_PROGRAMMING')
    }
  }
})
