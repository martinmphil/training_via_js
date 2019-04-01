<template>
  <div class="wrapper">

    <the-header class="the-header"/>

    <aside class="aside">
      <the-logo class="the-logo"/>
      <the-site-nav class="the-site-nav"/>
    </aside>

    <sensors-grade/>

    <article>
      <h1>Sensors</h1>
      <h2>Accuracy vs precision</h2>
      <p class="tagline">
        Comparing and contrasting accuracy with precision in sensor measurements
      </p>
      <p>
        In common language <em>accuracy</em> and <em>precision</em> often appear synonymous.
        But in sensor technology,
        specific scientific definitions imply contrasting concepts of accuracy and precision.
      </p>
      <figure class="figure">
        <img
          src="@/assets/prob_dist_acc_vs_precise.svg"
          alt="probability distribution illustrating accuracy versus precision">
        <figcaption class="figcaption">
          Probability distribution illustrating accuracy versus precision
        </figcaption>
      </figure>
      <p>
        Accuracy refers to the proximity of readings to a 'true' or reference value,
        as in the common meaning of the word accurate.
      </p>
      <p>
        Precision, in contrast,
        only considers the potential variance of values within a given measurement.
        Hence, for a set system, imprecise sensors yield results separated by large differences.
        Whereas precise measurements produces results clustered together.
      </p>
      <p>
        In short, accuracy considers closeness to a desired 'true' or reference value,
        whereas precision indicates a reliable grouping within a dataset.
      </p>
      <hr>

      <sensors-exercises/>

      <sensors-grade/>
      <hr>

      <the-footer/>

    </article>

  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
import TheLogo from '@/components/TheLogo.vue'
import TheSiteNav from '@/components/TheSiteNav.vue'
import SensorsExercises from '@/components/SensorsExercises.vue'
import SensorsGrade from '@/components/SensorsGrade.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'Sensors',
  components: {
    TheHeader, TheLogo, TheSiteNav, SensorsExercises, SensorsGrade, TheFooter
  },
  computed: {
    dateNow: function () {
      return new Date().toDateString()
    }
  }
}
</script>

<style scoped>
.the-logo {
  max-width: 30em;
  margin: auto;
}

.tagline {
  font-weight: bold;
}

.figure {
  margin:0;
  width: 100%;
}

.figcaption {
  text-align: center;
  font-family: 'IBM Plex Sans', Helvetica, Arial, sans-serif;
}

/* responsive web design */
@media only screen and (min-width: 67em) {
  .the-header {
    position: fixed;
    top: 0.5em;
    left: 0.5em;
  }
}

/* responsive web design */
@media only screen and (min-width: 40em) and (max-width: 67em) {
  .wrapper {
    width: 40em;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (min-width: 67em) and (max-width: 76em) {
  .wrapper {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-right: 10em;
    margin-left: 17em;
  }
  .aside {
    margin-left: 1%;
    width: 16em;
    position: fixed;
    top: 3em;
    left: 0;
  }
  .article {
    order: 20;
    flex-basis: 40em;
  }
  .grade-info {
    width: 10em;
    position: fixed;
    top: 3em;
    right: 0;
  }
}
@media only screen and (min-width: 76em) {
  .wrapper {
    width: 40em;
    margin-left: auto;
    margin-right: auto;
  }
  .aside {
    width: 16em;
    position: fixed;
    top: 3em;
    left: 0;
    margin-left: 2%;
  }
  .grade-info {
    width: 16em;
    position: fixed;
    top: 3em;
    right: 0;
    margin-right: 2%;
  }
}
</style>
