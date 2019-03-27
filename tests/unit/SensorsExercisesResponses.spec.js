import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import SensorsExercisesResponses from '@/components/SensorsExercisesResponses.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('SensorsExercisesResponses.vue', () => {
  let store
  let mutations

  beforeEach(() => {
    mutations = {
      correctAnswerSensors: jest.fn(),
      wrongAnswerSensors: jest.fn()
    }
    store = new Vuex.Store({
      mutations
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

  it('button click sets spent to true', () => {
    let wrapper = shallowMount(SensorsExercisesResponses, { store, localVue })
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.spent).toBe(true)
  })

  it('alpha answer code on 1st button sets userAnswerCode on click', () => {
    let wrapper = shallowMount(SensorsExercisesResponses, { store, localVue })
    wrapper.findAll('button').at(0).trigger('click')
    expect(wrapper.vm.userAnswerCode).toBe('alpha')
  })

  it('beta answerCode sets vm.userAnswerCode on click', () => {
    let wrapper = shallowMount(SensorsExercisesResponses, { store, localVue })
    wrapper.find('[answerCode="beta"]').trigger('click')
    expect(wrapper.vm.userAnswerCode).toBe('beta')
  })

  it('gamma answerCode sets vm.userAnswerCode on click', () => {
    let wrapper = shallowMount(SensorsExercisesResponses, { store, localVue })
    wrapper.find('[answerCode="gamma"]').trigger('click')
    expect(wrapper.vm.userAnswerCode).toBe('gamma')
  })

  it('delta answerCode sets vm.userAnswerCode on click', () => {
    let wrapper = shallowMount(SensorsExercisesResponses, { store, localVue })
    wrapper.find('[answerCode="delta"]').trigger('click')
    expect(wrapper.vm.userAnswerCode).toBe('delta')
  })
})
