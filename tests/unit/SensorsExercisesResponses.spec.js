import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import SensorsExercisesResponses from '@/components/SensorsExercisesResponses.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('SensorsExercisesResponses.vue', () => {
  let store
  let actions

  beforeEach(() => {
    actions = {
      correctAnswerSensors: jest.fn(),
      wrongAnswerSensors: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('has spent prop', () => {
    let wrapper = shallowMount(SensorsExercisesResponses)
    expect(wrapper.vm.spent).toBe(false)
  })

  it('has button', () => {
    let wrapper = shallowMount(SensorsExercisesResponses)
    expect(wrapper.find('button').is('button')).toBe(true)
  })

  it('sets spent to true on answer button click', () => {
    let wrapper = shallowMount(SensorsExercisesResponses, { store, localVue })
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.spent).toBe(true)
  })
})
