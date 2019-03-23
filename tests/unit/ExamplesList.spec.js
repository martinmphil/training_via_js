import { shallowMount } from '@vue/test-utils'
import ExamplesList from '@/components/ExamplesList.vue'

describe('ExamplesList.vue', () => {
  it('renders correct heading', () => {
    const wrapper = shallowMount(ExamplesList, { stubs: ['router-link']
    })
    expect(wrapper.html()).toContain('<h1>Training via JavaScript</h1>')
  })
})
