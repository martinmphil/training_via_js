<template>
  <div class="grade-info">
    <p>Sensors mark:</p>
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
  name: 'SensorsGrade',
  computed: {
    ...mapState({
      t: 'sensorsQuestionsTotalNbr',
      c: 'sensorsCorrectAnswerTally',
      w: 'sensorsWrongAnswerTally'
    }),
    currentMark () {
      return this.c || this.w ? this.c + ' out of ' + (this.c + this.w)
        : 'Please complete assignment to receive your mark'
    },
    progress () {
      let progressCoefficient = ((this.c + this.w) / this.t)
      return progressCoefficient > 1 ? 100 : Math.round(progressCoefficient * 100)
    },
    gradable () {
      return (this.progress === 100 && this.c >= 2)
    },
    grade () {
      return this.c >= 4 ? 'Distinction'
        : this.c >= 3 ? 'Merit'
          : this.c >= 2 ? 'Pass'
            : 'Fail'
    }
  }
}
</script>

<style scoped>
.grade-info {
  border: solid;
  padding: 1em;
  text-align: center;
}
</style>
