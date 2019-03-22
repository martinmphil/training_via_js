<template>
  <div class="sensors">
    <header>
      <h1>Accuracy vs precision</h1>
      <p class="tagline">
        Comparing and contrasting accuracy with precision in sensor measurements
      </p>
    </header>
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
import SensorsExercises from '@/components/SensorsExercises.vue'

let dateNow = new Date().toDateString()

export default {
  name: 'sensors',
  components: {
    SensorsExercises
  },
  data () {
    return {
      dateNow
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

.footer {
  margin: 2em;
  text-align: center;
  font-size: 90%;
}
</style>
