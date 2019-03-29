<template>
    <footer class="footer">
      <p>
        For more examples of Training via JavaScript
        please see your <router-link to="/">home page</router-link>.
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
