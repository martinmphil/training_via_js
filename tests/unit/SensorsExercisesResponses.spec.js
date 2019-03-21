import { mount } from '@vue/test-utils'
import SensorsExercisesResponses from '@/components/SensorsExercisesResponses.vue'

describe('SensorsExercisesResponses.vue', () => {

  const wrapper = mount(SensorsExercisesResponses)

  it('has prop', () => {
    expect(wrapper.vm.spent).toBe(false)
  })

})
