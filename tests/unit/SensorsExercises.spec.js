import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import SensorsExercises from '@/components/SensorsExercises.vue'
import SensorsExercisesResponses from '@/components/SensorsExercisesResponses.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('SensorsExercises.vue', () => {
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

  it('renders buttons from SensorsExercisesResponses', () => {
    let wrapper = mount(SensorsExercises, { store, localVue })
    expect(wrapper.contains('button')).toBe(true)
  })

  it('renders SensorsExercisesResponses', () => {
    let wrapper = shallowMount(SensorsExercises, { store, localVue })
    expect(wrapper.contains(SensorsExercisesResponses)).toBe(true)
  })
})
