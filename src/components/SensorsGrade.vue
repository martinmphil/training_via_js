<template>
  <div class="grade-info">
    <p>
      Sensors: {{ currentMark }} ({{ progress }}% complete).
    </p>
    <p v-if="gradable">
      Your Sensors assignment grade is: <strong>{{ grade }}</strong>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'SensorsGrade',
  computed: {
    currentMark () {
      let c = this.$store.state.correctAnswerTallySensors
      let w = this.$store.state.wrongAnswerTallySensors
      return c || w ? c + ' correct out of ' + (c + w) + ' attempted'
        : 'Please complete assignment to receive your mark'
    },
    progress () {
      let t = this.$store.state.totalNbrQuestionsSensors
      let c = this.$store.state.correctAnswerTallySensors
      let w = this.$store.state.wrongAnswerTallySensors
      let progressCoefficient = ((c + w) / t)
      return progressCoefficient > 1 ? 100 : Math.round(progressCoefficient * 100)
    },
    gradable () {
      let c = this.$store.state.correctAnswerTallySensors
      return (this.progress === 100 && c >= 2)
    },
    grade () {
      let c = this.$store.state.correctAnswerTallySensors
      return c >= 4 ? 'Distinction'
        : c >= 3 ? 'Merit'
          : c >= 2 ? 'Pass'
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
