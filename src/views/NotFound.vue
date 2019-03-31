<template>
  <div class="not-found">
    <p>
      Sorry, this web address seems unrecognisable to us.
    </p>
    <p>
      Please visit our
      <router-link to="/">Home Page</router-link>
      for examples of Training via JavaScript.
    </p>
  </div>
</template>

<style scoped>
/* responsive web design */
@media only screen and (min-width: 40em) {
  /* For desktop: */
  .not-found {
    width: 40em;
    margin: auto;
  }
}
</style>
