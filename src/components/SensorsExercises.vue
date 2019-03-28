<template>
  <section>
    <h2>Sensors assignment</h2>
    <p>For the following four graphs,
      please select the appropriate description for each dataset.
    </p>
    <h3>Graph A</h3>
    <img
      src="@/assets/sensors_dataset_graph_a.svg"
      alt="Exercise dataset: Graph A"
      class="dataset-graph"
    >
    <p>
      For the graph above,
      please select the appropriate description from the four options below:
    </p>
    <SensorsExercisesResponses desiredAnswerCode="gamma"/>
    <hr>
    <h3>Graph B</h3>
    <img
      src="@/assets/sensors_dataset_graph_b.svg"
      alt="Exercise dataset: Graph B"
      class="dataset-graph"
    >
    <p>
      For the graph above,
      please select the appropriate description from the four options below:
    </p>
    <SensorsExercisesResponses desiredAnswerCode="delta"/>
    <hr>
    <h3>Graph C</h3>
    <img
      src="@/assets/sensors_dataset_graph_c.svg"
      alt="Exercise dataset: Graph C"
      class="dataset-graph"
    >
    <p>
      For the graph above,
      please select the appropriate description from the four options below:
    </p>
    <SensorsExercisesResponses desiredAnswerCode="alpha"/>
    <hr>
    <h3>Graph D</h3>
    <img
      src="@/assets/sensors_dataset_graph_d.svg"
      alt="Exercise dataset: Graph D"
      class="dataset-graph"
    >
    <p>
      For the graph above,
      please select the appropriate description from the four options below:
    </p>
    <SensorsExercisesResponses desiredAnswerCode="beta"/>
    <hr>
  </section>
</template>

<script>
import SensorsExercisesResponses from '@/components/SensorsExercisesResponses.vue'

export default {
  name: 'SensorsExercises',
  components: {
    SensorsExercisesResponses
  }
}
</script>

<style scoped>
.dataset-graph {
  width: 100%;
}

</style>
