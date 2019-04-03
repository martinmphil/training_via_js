import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sensorsQuestionsTotalNbr: 4,
    sensorsCorrectAnswerTally: 0,
    sensorsWrongAnswerTally: 0,
    sensorsSubmissions: [],
    functionalProgrammingQuestionsTotalNbr: 7,
    functionalProgrammingCorrectAnswerTally: 0,
    functionalProgrammingWrongAnswerTally: 0,
    functionalProgrammingSubmissions: []
  },
  mutations: {
    CORRECT_ANSWER_SENSORS (state) {
      state.sensorsCorrectAnswerTally++
    },
    WRONG_ANSWER_SENSORS (state) {
      state.sensorsWrongAnswerTally++
    },
    SUBMIT_ANSWER_SENSOR (state, submission) {
      state.sensorsSubmissions.push(submission)
    },
    CORRECT_ANSWER_FUNCTIONAL_PROGRAMMING (state) {
      state.functionalProgrammingCorrectAnswerTally++
    },
    WRONG_ANSWER_FUNCTIONAL_PROGRAMMING (state) {
      state.functionalProgrammingWrongAnswerTally++
    },
    SUBMIT_ANSWER_FUNCTIONAL_PROGRAMMING (state, submission) {
      state.functionalProgrammingSubmissions.push(submission)
    }
  },
  actions: {
    correctAnswerSensors (context) {
      context.commit('CORRECT_ANSWER_SENSORS')
    },
    wrongAnswerSensors (context) {
      context.commit('WRONG_ANSWER_SENSORS')
    },
    submitAnswerSensor (context, submission) {
      context.commit('SUBMIT_ANSWER_SENSOR', submission)
    },
    correctAnswerFunctionalProgramming (context) {
      context.commit('CORRECT_ANSWER_FUNCTIONAL_PROGRAMMING')
    },
    wrongAnswerFunctionalProgramming (context) {
      context.commit('WRONG_ANSWER_FUNCTIONAL_PROGRAMMING')
    },
    submitAnswerFunctionalProgramming (context, submission) {
      context.commit('SUBMIT_ANSWER_FUNCTIONAL_PROGRAMMING', submission)
    }
  }
})
