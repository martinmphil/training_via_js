<template>
  <div class="exercise">
    <p class="question" v-html="questionText"></p>
    <button class="answer-button affirm" @click="answeringYes">Yes</button>
    <button class="answer-button neg" @click="answeringNo">No</button>
    <p class="instructions-or-response" v-html="instructionsOrResponse"></p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'YesNoQuestion',
  props: {
    questionText: String,
    yesAnsweredText: String,
    noAnsweredText: String
  },
  data: function () {
    return {
      spent: false,
      instructionsOrResponse: 'Please click an answer button above.'
    }
  },
  methods: {
    answeringYes: function () {
      this.instructionsOrResponse = this.yesAnsweredText
    },
    answeringNo: function () {
      this.instructionsOrResponse = this.noAnsweredText
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

</style>
