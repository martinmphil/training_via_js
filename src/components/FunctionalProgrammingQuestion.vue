<template>
  <div class="exercise">
    <p class="question" v-html="questionText"></p>
    <button
      :class="['answer-button', { affirm : !spent }, { spent : spent } ]"
      @click="answering('yes')"
    >Yes</button>
    <button
      :class="['answer-button', { neg : !spent }, { spent : spent } ]"
      @click="answering('no')"
    >No</button>
    <p class="instructions-or-response" v-html="instructionsOrResponse"></p>
    <hr>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FunctionalProgrammingQuestion',
  props: {
    questionText: String,
    yesAnsweredText: String,
    noAnsweredText: String,
    desiredAnswer: String
  },
  data: function () {
    return {
      spent: false,
      instructionsOrResponse: 'Please click an answer button above.'
    }
  },
  methods: {
    ...mapActions([
      'correctAnswerFunctionalProgramming',
      'wrongAnswerFunctionalProgramming'
    ]),
    answering: function (a) {
      this.instructionsOrResponse =
        (a === 'yes') ? this.yesAnsweredText : this.noAnsweredText
      if (this.spent === false) {
        if (a === this.desiredAnswer) {
          this.correctAnswerFunctionalProgramming()
        } else {
          this.wrongAnswerFunctionalProgramming()
        }
      }
      this.spent = true
    }
  }
}
</script>

<style scoped>
.exercise {
  text-align: center;
}

.question {
  margin-top: 3em;
  margin-bottom: 2em;
}

.instructions-or-response {
  margin-top: 2em;
}

.answer-button {
  border: solid;
  border-color: rgba(0,0,0,0.2);
  border-radius: 0.5em;
  padding: 0.5em;
  margin: 0.5em;
  cursor: pointer;
  color: black;
  font-size: 100%;
  width: 5em;
}

.answer-button:hover {
  background-color: white;
}

.affirm {
  background-color: #ccffcc;
}

.neg {
  background-color: #ffcccc;
}

.spent {
  background-color: white;
  color: rgba(77, 0, 102, 0.8);
}
</style>
