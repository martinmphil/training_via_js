<template>
  <div class="the-logo">
    <router-link to="/">
      <img class="training-via-js-logo"
        alt="Training via JavaScript logo"
        src="@/assets/training_via_js_logo.svg">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TheLogo'
}
</script>

<style scoped>
.training-via-js-logo {
  display: block;
}
</style>
