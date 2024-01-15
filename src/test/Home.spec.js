/* eslint-disable no-undef */
import HelloWorld from '@/views/Home.vue';
import { mount } from '@vue/test-utils';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Home' } });
    expect(wrapper.text()).toContain('Hello Home');
  });
});
