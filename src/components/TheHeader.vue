<template>
  <header class="header">
    <router-link to="/">Training via JavaScript</router-link>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>
.header {
  font-family: 'IBM Plex Sans', Helvetica, Arial, sans-serif;
}

.header a {
  text-decoration: none;
  color: #0000ee;
}

.header a.router-link-exact-active {
  color: black;
  pointer-events: none;
}
</style>
