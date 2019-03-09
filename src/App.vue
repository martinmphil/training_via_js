<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Contents</router-link> |
      <router-link to="/sensor">Sensor</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'IBM Plex Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 2em;
}

#nav a {
  font-weight: bold;
  /* color: #2c3e50; */
  color: #0000ee;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
  text-decoration: none;
  color: black;
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
