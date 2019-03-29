<template>
  <div class="grade-info">
    <p>
      Functional Programming: {{ currentMark }} ({{ progress }}% complete).
    </p>
    <p v-if="gradable">
      Your Functional Programming assignment grade is: <strong>{{ grade }}</strong>.
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
      return c || w ? c + ' correct out of ' + (c + w) + ' attempted'
        : 'Please answer questions to receive a mark'
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
  padding: 1em;
}
</style>
