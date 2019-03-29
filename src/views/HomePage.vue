<template>
  <div class="home">
    <ExamplesList/>
  </div>
</template>

<script>
// @ is an alias to /src
import ExamplesList from '@/components/ExamplesList.vue'

export default {
  name: 'HomePage',
  components: {
    ExamplesList
  }
}
</script>
