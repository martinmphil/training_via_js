import { shallowMount } from '@vue/test-utils'
import ExamplesList from '@/components/ExamplesList.vue'

describe('ExamplesList.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(ExamplesList, {
    })
    expect(wrapper.html()).toContain('<h1>Training via JavaScript</h1>')
  })
})
