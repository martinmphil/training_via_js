<template>
  <footer class="footer">
    <p>
      Please visit your <router-link to="/">home page</router-link>
      for more examples of Training via JavaScript.
    </p>
    {{ dateNow }}
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data: function () {
    return {
      dateNow: new Date().toDateString()
    }
  }
}
</script>

<style scoped>
.footer {
  margin: 2em;
  text-align: center;
  font-size: 90%;
}
</style>
