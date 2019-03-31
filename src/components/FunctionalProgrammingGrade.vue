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
export default {
  name: 'FunctionalProgrammingGrade',
  data: function () {
    return { a: 0 }
  },
  computed: {
    currentMark () {
      let c = this.$store.state.correctAnswerTallyFunctionalProgramming
      let w = this.$store.state.wrongAnswerTallyFunctionalProgramming
      return c || w ? c + ' out of ' + (c + w)
        : 'Please answer questions to receive your mark'
    },
    progress () {
      let t = this.$store.state.totalNbrQuestionsFunctionalProgramming
      let c = this.$store.state.correctAnswerTallyFunctionalProgramming
      let w = this.$store.state.wrongAnswerTallyFunctionalProgramming
      let progressCoefficient = ((c + w) / t)
      return progressCoefficient > 1 ? 100 : Math.round(progressCoefficient * 100)
    },
    gradable () {
      let c = this.$store.state.correctAnswerTallyFunctionalProgramming
      return (this.progress === 100 && c >= 4)
    },
    grade () {
      let c = this.$store.state.correctAnswerTallyFunctionalProgramming
      return c >= 7 ? 'Distinction'
        : c >= 6 ? 'Merit'
          : c >= 4 ? 'Pass'
            : 'Fail'
    }
  }
}
</script>

<style scoped>
.grade-info {
  border: solid;
  padding: 1%;
}
</style>
