import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import SensorsExercisesResponses from '@/components/SensorsExercisesResponses.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('SensorsExercisesResponses.vue', () => {
  let store
  let actions
  let state

  beforeEach(() => {
    actions = {
      correctAnswerSensors: jest.fn(),
      wrongAnswerSensors: jest.fn(),
      submitAnswerSensor: jest.fn()
    }
    state = {
      sensorsSubmissions: ['graph-a', 'graph-b']
    }
    store = new Vuex.Store({
      actions, state
    })
  })

  it('has spent prop', () => {
    let wrapper = shallowMount(SensorsExercisesResponses, { store, localVue })
    expect(wrapper.vm.spent).toBe(false)
  })

  it('has button', () => {
    let wrapper = shallowMount(SensorsExercisesResponses, { store, localVue })
    expect(wrapper.find('button').is('button')).toBe(true)
  })

  it('sets spent to true on answer button click', () => {
    let wrapper = shallowMount(SensorsExercisesResponses, { store, localVue })
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.spent).toBe(true)
  })
})
