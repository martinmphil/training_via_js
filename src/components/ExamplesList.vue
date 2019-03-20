<template>
  <article>
    <h1>Training via JavaScript</h1>
    <h2>Examples</h2>
    <p class="bttn-linking-to-example">
      <a class="link-text" href="http://dancewith.co.uk/js/accurate_vs_precise.html">
        Comparing and contrasting accuracy with precision in sensor measurements.
      </a>
    </p>
    <p class="bttn-linking-to-example">
      <a class="link-text" href="http://dancewith.co.uk/js/fp_teaser.html">
        Functional programming teaser.
      </a>
    </p>
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
export default {
  name: 'ExamplesList'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bttn-linking-to-example {
  clear: right;
  background-color: #ddffff;
  text-align: center;
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
</style>
