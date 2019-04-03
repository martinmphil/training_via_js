<template>
  <div class="grade-info">
    <p>Functional Programming mark:</p>
    <p>({{ progress }}% complete)</p>
    <p>{{ currentMark }}.</p>
    <p v-if="gradable">
      Your grade is: <strong>{{ grade }}</strong>.
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FunctionalProgrammingGrade',
  computed: {
    ...mapState({
      t: 'functionalProgrammingQuestionsTotalNbr',
      c: 'functionalProgrammingCorrectAnswerTally',
      w: 'functionalProgrammingWrongAnswerTally'
    }),
    currentMark () {
      return this.c || this.w ? this.c + ' out of ' + (this.c + this.w)
        : 'Please answer questions to receive your mark'
    },
    progress () {
      let progressCoefficient = ((this.c + this.w) / this.t)
      return progressCoefficient > 1 ? 100 : Math.round(progressCoefficient * 100)
    },
    gradable () {
      return (this.progress === 100 && this.c >= 4)
    },
    grade () {
      return this.c >= 7 ? 'Distinction'
        : this.c >= 6 ? 'Merit'
          : this.c >= 4 ? 'Pass'
            : 'Fail'
    }
  }
}
</script>

<style scoped>
.grade-info {
  border: solid;
  padding: 1%;
  text-align: center;
}
</style>
