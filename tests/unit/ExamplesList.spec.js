import { shallowMount } from '@vue/test-utils'
import ExamplesList from '@/components/ExamplesList.vue'

describe('ExamplesList.vue', () => {
  it('renders correct heading text', () => {
    const wrapper = shallowMount(ExamplesList, { stubs: ['router-link']
    })
    expect(wrapper.html()).toContain('Examples of training via JavaScript')
  })
})
