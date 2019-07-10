<template>
  <div id="home-page">
    <the-header class="the-header"/>
    <the-logo class="the-logo"/>
    <examples-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
import TheLogo from '@/components/TheLogo.vue'
import ExamplesList from '@/components/ExamplesList.vue'

export default {
  name: 'HomePage',
  components: {
    TheHeader, TheLogo, ExamplesList
  }
}
</script>

<style scoped>
.the-logo {
  max-width: 30em;
  margin: auto;
  pointer-events: none;
}

/* responsive web design */
@media only screen and (min-width: 50em) {
  #home-page {
    width: 40em;
    margin: auto;
  }
}

/* responsive web design */
@media only screen and (min-width: 67em) {
  .the-header {
    position: fixed;
    top: 0.5em;
    left: 0.5em;
  }
}
</style>
