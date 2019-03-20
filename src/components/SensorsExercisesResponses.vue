<template>
  <div>
    <button
      type="button"
      v-for="(item, index) in possibleAnswers"
        :key="item.id"
        :id="item.id"
        :index="index"
        v-html="item.text"
        @click.once="userResponse"
        :disabled=spent
        :class="[item.classHolder, { answered: spent}]"
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
      let t = event.target
      let c = t.textContent
      let i = t.getAttribute('index')
      t.blur()
      if (this.userAnswerId === this.desiredAnswerId) {
        this.possibleAnswers[i].classHolder = 'correctUserAnswer'
        t.textContent = `CORRECT: ` + c
      } else {
        t.textContent = `Incorrect`
      }
    }
  }

}
</script>

<style scoped>
button {
  display: block;
  width: 24em;
  margin: 0.6em auto;
  padding: 0.6em 0;
  font-size: 120%;
  cursor: pointer;
  box-shadow: 0.4em 0.4em 0.5em 0.1em rgba(0,0,0,0.5);
}

.correctUserAnswer {
  background-color: white;
  color: green;
}

.answered {
  pointer-events: none;
}

</style>
