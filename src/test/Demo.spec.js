/* eslint-disable no-undef */
import HelloWorld from '@/views/Demo.vue';
import { mount } from '@vue/test-utils';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Demo' } });
    expect(wrapper.text()).toContain('Hello Demo');
  });
});
