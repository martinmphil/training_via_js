<template>
  <div>
    <button
      type="button"
      v-for="(item, index) in possibleAnswers"
        :key="item.id"
        :id="item.id"
        :index="index"
        v-html="item.text"
        @click="userResponse"
        :disabled=spent
        :class="item.classHolder"
    >
    </button>
  </div>
</template>

<script>
export default {
  name: 'SensorsExercisesResponses',
  props: {
    desiredAnswerId: String
  },
  data: function () {
    return {
      possibleAnswers: [
        { id: 'alpha', text: 'both accurate and precise', classHolder: '' },
        { id: 'beta', text: 'accurate but <em>imprecise</em>', classHolder: '' },
        { id: 'gamma', text: '<em>inaccurate</em> but precise', classHolder: '' },
        { id: 'delta', text: 'both inaccurate and imprecise', classHolder: '' }
      ],
      spent: false,
      userAnswerId: ''
    }
  },
  methods: {
    userResponse: function (event) {
      this.spent = true
      this.userAnswerId = event.target.id
      if (this.userAnswerId === this.desiredAnswerId) {
        let x = event.target.getAttribute('index')
        this.possibleAnswers[x].classHolder = 'correctUserAnswer'
      }
    }
  }

}
</script>

<style scoped>
button {
  display: block;
  width: 24em;
  margin: 1em auto;
  padding: 1em 0;
  font-size: 120%;
  cursor: pointer;
}

.correctUserAnswer {
  background-color: white;
  color: green;
}

</style>
