import Component from '../index';

export default {
  id: 'tree-select-sn-examples',
  title: '组件列表/TreeSelectSn/示例',
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
};

export const Example1 = {
  name: '基本用法',
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: '<tree-select-sn v-bind="$props"></tree-select-sn>',
  }),
  args: {
    text: 'Hello world',
  },
};