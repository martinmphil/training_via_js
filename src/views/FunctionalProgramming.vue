<template>
  <div class="functional-programming">
    <h1>Functional Programming Teaser</h1>
    <p class="tagline">Declarative, pure and referentially transparent</p>
    <p>
      See
      <a href="https://en.wikipedia.org/wiki/Functional_programming">Functional programming</a>
      page on Wikipedia.
    </p>
    <hr>

    <div v-for="item in questionData" :key="item.questionCode">
      <YesNoQuestion
        :questionText="item.questionText"
        :yesAnsweredText="item.yesAnsweredText"
        :noAnsweredText="item.noAnsweredText"
      />
    </div>

    <section class="references">
      <h3>Sources</h3>
      <p>
        <cite><a href="https://github.com/getify/Functional-Light-JS">Kyle Simpson</a></cite>
      </p>
      <p>
        <cite><a href="https://lispcast.com/">Eric Normand</a></cite>
      </p>
      <hr>
    </section>

    <footer class="footer">
      <p>
        Please see our <router-link to="/">contents page</router-link>
        for more examples of Training via JavaScript.
      </p>
      {{ dateNow }}
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import YesNoQuestion from '@/components/YesNoQuestion.vue'
import questionDataJSON from '@/assets/functional_programming_teasers_questions.json'

let dateNow = new Date().toDateString()

export default {
  name: 'FunctionalProgramming',
  components: {
    YesNoQuestion
  },
  data () {
    return {
      dateNow,
      questionData: questionDataJSON
    }
  }
}
</script>

<style scoped>
.tagline {
  font-weight: bold;
}

.footer {
  margin: 2em;
  text-align: center;
  font-size: 90%;
}
</style>
