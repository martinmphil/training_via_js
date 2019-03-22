import { mount } from '@vue/test-utils'
import SensorsExercisesResponses from '@/components/SensorsExercisesResponses.vue'

describe('SensorsExercisesResponses.vue', () => {
  it('has spent prop', () => {
    let wrapper = mount(SensorsExercisesResponses)
    expect(wrapper.vm.spent).toBe(false)
  })

  it('has button', () => {
    let wrapper = mount(SensorsExercisesResponses)
    expect(wrapper.find('button').is('button')).toBe(true)
  })

  it('button click sets spent to true', () => {
    let wrapper = mount(SensorsExercisesResponses)
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.spent).toBe(true)
  })

  it('alpha answer code on 1st button sets userAnswerCode on click', () => {
    let wrapper = mount(SensorsExercisesResponses)
    wrapper.findAll('button').at(0).trigger('click')
    expect(wrapper.vm.userAnswerCode).toBe('alpha')
  })

  it('beta answerCode sets vm.userAnswerCode on click', () => {
    let wrapper = mount(SensorsExercisesResponses)
    wrapper.find('[answerCode="beta"]').trigger('click')
    expect(wrapper.vm.userAnswerCode).toBe('beta')
  })

  it('gamma answerCode sets vm.userAnswerCode on click', () => {
    let wrapper = mount(SensorsExercisesResponses)
    wrapper.find('[answerCode="gamma"]').trigger('click')
    expect(wrapper.vm.userAnswerCode).toBe('gamma')
  })

  it('delta answerCode sets vm.userAnswerCode on click', () => {
    let wrapper = mount(SensorsExercisesResponses)
    wrapper.find('[answerCode="delta"]').trigger('click')
    expect(wrapper.vm.userAnswerCode).toBe('delta')
  })
})
