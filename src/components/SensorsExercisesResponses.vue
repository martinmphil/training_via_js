<template>
  <div>
    <button
      type="button"
      class="answerBttn"
      v-for="(item, index) in possibleAnswers"
        :key="item.id"
        :answerCode="item.id"
        :index="index"
        v-html="item.text"
        @click.once="userResponse(index)"
        :disabled=spent
        :class="[item.classHolder, { answered: spent }]"
    >
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SensorsExercisesResponses',
  props: {
    desiredAnswerCode: String,
    questionTitle: String
  },
  data: function () {
    return {
      possibleAnswers: [
        { id: 'alpha', text: 'both accurate and precise', classHolder: '' },
        { id: 'beta', text: 'accurate but <em>imprecise</em>', classHolder: '' },
        { id: 'gamma', text: '<em>inaccurate</em> but precise', classHolder: '' },
        { id: 'delta', text: 'both inaccurate and imprecise', classHolder: '' }
      ],
      spent: false
    }
  },
  created () {
    if (this.$store.state.sensorsSubmissions
      .filter(x => x === this.questionTitle).length > 0
    ) {
      this.spent = true
    }
  },
  methods: {
    ...mapActions([
      'correctAnswerSensors',
      'wrongAnswerSensors',
      'submitAnswerSensor'
    ]),
    userResponse: function (i) {
      this.submitAnswerSensor(this.questionTitle)
      this.spent = true
      let a = this.possibleAnswers[i]
      let c = a.text
      if (a.id === this.desiredAnswerCode) {
        this.correctAnswerSensors()
        a.classHolder = 'correctUserAnswer'
        a.text = `CORRECT: ` + c
      } else {
        this.wrongAnswerSensors()
        a.text = `Incorrect`
      }
    }
  }
}
</script>

<style scoped>
.answerBttn {
  display: block;
  width: 24em;
  margin: 0.6em auto;
  padding: 0.6em 0;
  font-size: 120%;
  cursor: pointer;
  box-shadow: 0.4em 0.4em 0.5em 0.1em rgba(0,0,0,0.5);
}
@media screen and (max-width: 30em) {
  .answerBttn {
    width: 100%;
  }
}

.correctUserAnswer {
  background-color: white;
  color: green;
}

.answered {
  pointer-events: none;
}

</style>
