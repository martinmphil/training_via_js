<template>
  <div class="home">
    <TheHeader/>
    <ExamplesList/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TheHeader from '@/components/TheHeader.vue'
import ExamplesList from '@/components/ExamplesList.vue'

export default {
  name: 'home',
  components: {
    TheHeader,
    ExamplesList,
    HelloWorld
  }
}
</script>
