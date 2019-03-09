<template>
  <div class="home">
    <TheLogo/>
    <ExamplesList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheLogo from '@/components/TheLogo.vue'
import ExamplesList from '@/components/ExamplesList.vue'

export default {
  name: 'home',
  components: {
    TheLogo,
    ExamplesList,
  }
}
</script>
