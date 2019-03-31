<template>
  <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/sensor">Sensors</router-link>
      <router-link to="/functional-programming">Functional-programming</router-link>
  </nav>
</template>

<script>
export default {
  name: 'TheSiteNav'
}
</script>

<style scoped>
.nav {
  text-align: center;
}

.nav a {
  display: block;
  background-color: rgb(204, 231, 255);
  border: solid;
  border-color: rgb(0, 0, 102);
  border-radius: 0.5em;
  box-shadow: 0 0.5em 0.4em 0 rgba(0,0,102,0.4), 0 0.4em 0.5em 0 rgba(0,0,102,0.3);
  padding: 0.7em;
  margin: 1em auto;
  cursor: pointer;
  font-weight: bold;
  color: #0000ee;
  text-decoration: none;
  width: 16em;
}

.nav a.router-link-exact-active {
  display: none;
}
</style>
