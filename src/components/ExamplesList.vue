<template>
  <article>
    <h1>Examples of training via JavaScript</h1>
    <router-link class="bttn-linking-to-example" to="/sensor">Sensor precision vs accuracy</router-link>
    <router-link class="bttn-linking-to-example" to="/functional-programming">Functional programming teaser</router-link>
    <div class="grade-info">
      <h3>Grade Information</h3>
      <SensorsGrade/>
      <FunctionalProgrammingGrade/>
    </div>
    <hr>
    <div class="external-examples">
      <h2>External examples</h2>
      <h3>React hooks</h3>
      <p>
        <a href="http://dancewith.co.uk/vote/">
          Vote app
        </a>
      </p>
      <h3>JavaScript in gaming</h3>
      <p>
        <a href="http://dancewith.co.uk/tabletop2019/">
          Computer-aid tabletop role-playing game
        </a>
      </p>
      <hr>
      <hr>
      <h4>Miscellaneous</h4>
      <p>
        <a href="https://job-scheduler.netlify.com/">
          JavaScript job scheduler
        </a>
      </p>
      <hr>
      <h3>Source code and documentation</h3>
      <p>
        <a href="https://github.com/martinmphil">
          GitHub repositories.
        </a>
      </p>
    </div>
    <hr>
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
  display: block;
  width: 80%;
  background-color: #ddffff;
  border: solid;
  border-color: rgba(0,0,0,0.1);
  border-radius: 0.4em;
  padding: 1em;
  margin: 1em auto;
  box-shadow: 0.4em 0.4em 0.5em 0.1em rgba(0,0,0,0.5);
  cursor: pointer;
  text-align: center;
  font-size: 120%;
  text-decoration: none;
  color: black;
}
.bttn-linking-to-example:hover {
  background-color: white;

}

.grade-info {
  margin: 1em;
}

.external-examples {
  box-shadow: inset 0 -0.2em 0 hsla(0, 0%, 100%, 0.4), inset 0 0.2em 0.2em hsla(0, 0%, 0%, 0.4);
  background-color: hsl(269, 41%, 90%);
  border-radius: 0.5em;
  padding: .8em
}
.external-examples a {
  color: blue;
}
</style>
