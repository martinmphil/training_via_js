<template>
  <div class="functional-programming">

    <functional-programming-grade/>

    <h1>Functional Programming Teaser</h1>
    <p class="tagline">Declarative, pure and referentially transparent</p>
    <p>
      See
      <a href="https://en.wikipedia.org/wiki/Functional_programming">Functional programming</a>
      on Wikipedia.
    </p>
    <hr>

    <div v-for="item in questionData" :key="item.questionCode">
      <YesNoQuestion
        :questionText="item.questionText"
        :yesAnsweredText="item.yesAnsweredText"
        :noAnsweredText="item.noAnsweredText"
        :desiredAnswer="item.bestAnswer"
      />
    </div>

    <functional-programming-grade/>

    <section class="references">
      <hr>
      <h3>Sources</h3>
      <p>
        <cite><a href="https://github.com/getify/Functional-Light-JS">Kyle Simpson</a></cite>
      </p>
      <p>
        <cite><a href="https://lispcast.com/">Eric Normand</a></cite>
      </p>
      <hr>
    </section>

    <the-footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import YesNoQuestion from '@/components/YesNoQuestion.vue'
import questionDataJSON from '@/assets/functional_programming_teasers_questions.json'
import FunctionalProgrammingGrade from '@/components/FunctionalProgrammingGrade.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'FunctionalProgramming',
  components: {
    YesNoQuestion, FunctionalProgrammingGrade, TheFooter
  },
  data: function () {
    return {
      dateNow: new Date().toDateString(),
      questionData: questionDataJSON
    }
  }
}
</script>

<style scoped>
.tagline {
  font-weight: bold;
}
</style>
