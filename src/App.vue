<template>
  <div id="app">
    <router-link to="/">
      <img id="training-via-js-logo"
        alt="Training via JavaScript logo"
        width="300" height="150"
        src="./assets/training_via_js_logo.svg">
    </router-link>
    <nav id="nav">
      <router-link to="/">Contents</router-link> |
      <router-link to="/sensor">Sensors</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
body {
  background-color:#ffffcc;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 2em;
}

#nav a {
  font-weight: bold;
  color: #0000ee;
}

#nav a.router-link-exact-active {
  text-decoration: none;
  color: black;
}

#training-via-js-logo {
  float: right;
  margin-left: 1em;
  margin-bottom: 1em;
}

/* width & height includes padding + border for responsive web design */
* {
  box-sizing: border-box;
}
/* responsive web design */
@media only screen and (min-width: 40em) {
  /* For desktop: */
  #app {
    width: 40em;
    margin: auto;
  }
}

</style>
