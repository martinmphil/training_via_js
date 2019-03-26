<template>
  <div>Your total number of correct answers so far is: {{ questionResults }}</div>
</template>

<script>
export default {
  name: 'QuestionResults',
  computed: {
    questionResults () {
      return this.$store.state.sensorsResults
    }
  }

}
</script>

<style>

</style>
