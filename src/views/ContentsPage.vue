<template>
  <div class="home">
    <ExamplesList/>
  </div>
</template>

<script>
// @ is an alias to /src
import ExamplesList from '@/components/ExamplesList.vue'

export default {
  name: 'contents-page',
  components: {
    ExamplesList
  }
}
</script>
