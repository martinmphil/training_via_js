<template>
  <div class="sensors">

    <the-header class="the-header"/>

    <aside class="aside">
      <the-logo class="the-logo"/>
      <the-site-nav class="the-site-nav"/>
    </aside>

    <sensors-grade/>

    <section>
      <h1>Sensors</h1>
      <h2>Accuracy vs precision</h2>
      <p class="tagline">
        Comparing and contrasting accuracy with precision in sensor measurements
      </p>
    </section>
    <section>
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
    </section>

    <sensors-exercises/>

    <sensors-grade/>
    <hr>

    <the-footer/>

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
@media only screen and (min-width: 50em) {
  .the-header {
    position: fixed;
    top: 0.5em;
    left: 0.5em;
  }
}
</style>
