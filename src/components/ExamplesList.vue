<template>
  <article>
    <h1>Examples of training via JavaScript</h1>
    <p class="bttn-linking-to-example">
      <router-link class="link-text" to="/sensor">Sensor precision vs accuracy</router-link>
    </p>
    <p class="bttn-linking-to-example">
      <router-link class="link-text" to="/functional-programming">Functional programming teaser</router-link>
    </p>
    <div class="grade-info">
      <h3>Grade Information</h3>
      <SensorsGrade/>
      <FunctionalProgrammingGrade/>
    </div>
    <hr>
    <h3>JavaScript in gaming</h3>
    <p>
      <a href="http://dancewith.co.uk/tabletop2019/">
        Computer-aid tabletop role-playing game.
      </a>
    </p>
    <hr>
    <div class="references">
      <h3>Source code and documentation</h3>
      <p>
        <a href="https://github.com/martinmphil">
          GitHub repositories.
        </a>
      </p>
    </div>
  </article>
</template>

<script>
import SensorsGrade from '@/components/SensorsGrade.vue'
import FunctionalProgrammingGrade from '@/components/FunctionalProgrammingGrade.vue'

export default {
  name: 'ExamplesList',
  components: {
    SensorsGrade, FunctionalProgrammingGrade
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bttn-linking-to-example {
  clear: right;
  background-color: #ddffff;
  text-align: center;
  font-size: 120%;
  border: solid;
  border-color: rgba(0,0,0,0.1);
  border-radius: 0.4em;
  padding: 1em;
  margin: 1em;
  box-shadow: 0.4em 0.4em 0.5em 0.1em rgba(0,0,0,0.5);
  cursor: pointer;
}
.link-text {
  text-decoration: none;
  color: black;
}
.grade-info {
  margin: 1em;
}
</style>
