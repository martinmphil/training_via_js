<template>
  <div class="home">
    <TheHeader/>
    <ExamplesList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
import ExamplesList from '@/components/ExamplesList.vue'

export default {
  name: 'home',
  components: {
    TheHeader,
    ExamplesList,
  }
}
</script>
