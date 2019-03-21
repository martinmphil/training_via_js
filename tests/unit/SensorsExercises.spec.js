import { mount } from '@vue/test-utils'
import SensorsExercises from '@/components/SensorsExercises.vue'
import SensorsExercisesResponses from '@/components/SensorsExercisesResponses.vue'

describe('SensorsExercises.vue', () => {

  const wrapper = mount(SensorsExercises)

  it('renders buttons from SensorsExercisesResponses', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('renders SensorsExercisesResponses', () => {
    expect(wrapper.contains(SensorsExercisesResponses)).toBe(true)
  })

})
