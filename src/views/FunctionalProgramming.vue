<template>
  <div class="functional-programming">

    <the-header class="the-header"/>

    <aside class="aside">
      <the-logo class="the-logo"/>
      <the-site-nav class="the-site-nav"/>
    </aside>

    <functional-programming-grade class="grade-info"/>

    <article>
      <h1>Functional Programming Teaser</h1>
      <p class="tagline">Declarative, pure and referentially transparent</p>
      <p>
        See
        <a href="https://en.wikipedia.org/wiki/Functional_programming">Functional programming</a>
        on Wikipedia.
      </p>
      <hr>

      <div v-for="item in questionData" :key="item.questionCode">
        <functional-programming-question
          :questionText="item.questionText"
          :yesAnsweredText="item.yesAnsweredText"
          :noAnsweredText="item.noAnsweredText"
          :desiredAnswer="item.bestAnswer"
        />
      </div>

      <functional-programming-grade/>

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
      <the-footer/>
    </article>

  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
import TheLogo from '@/components/TheLogo.vue'
import TheSiteNav from '@/components/TheSiteNav.vue'
import FunctionalProgrammingQuestion from '@/components/FunctionalProgrammingQuestion.vue'
import questionDataJSON from '@/assets/functional_programming_teasers_questions.json'
import FunctionalProgrammingGrade from '@/components/FunctionalProgrammingGrade.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'FunctionalProgramming',
  components: {
    TheLogo, TheHeader, TheSiteNav, FunctionalProgrammingQuestion, FunctionalProgrammingGrade, TheFooter
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
.the-logo {
  max-width: 30em;
  margin: auto;
  pointer-events: none;
}

.tagline {
  font-weight: bold;
}

/* responsive web design */
@media only screen and (min-width: 40em) {
  .the-header {
    position: fixed;
    top: 0.5em;
    left: 0.5em;
  }
}

/* responsive web design */
@media only screen and (min-width: 40em) and (max-width: 67em) {
  .functional-programming {
    width: 40em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
  }
}
@media only screen and (min-width: 67em) and (max-width: 76em) {
  .functional-programming {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-right: 10em;
    margin-left: 17em;
  }
  .aside {
    margin-left: 1%;
    max-width: 16em;
    position: fixed;
    top: 3em;
    left: 0;
  }
  .article {
    order: 20;
    flex-basis: 40em;
  }
  .grade-info {
    max-width: 10em;
    position: fixed;
    top: 3em;
    right: 0;
  }
}
@media only screen and (min-width: 76em) {
  .functional-programming {
    width: 40em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
  }
  .aside {
    max-width: 16em;
    position: fixed;
    top: 3em;
    left: 0;
    margin-left: 2%;
  }
  .article {
    order: 20;
    flex-basis: 40em;
  }
  .grade-info {
    max-width: 16em;
    position: fixed;
    top: 3em;
    right: 0;
    margin-right: 2%;
  }
}
</style>
