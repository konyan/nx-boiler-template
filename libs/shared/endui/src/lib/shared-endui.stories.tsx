import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SharedEndui } from './shared-endui';

export default {
  component: SharedEndui,
  title: 'SharedEndui',
} as ComponentMeta<typeof SharedEndui>;

const Template: ComponentStory<typeof SharedEndui> = (args) => (
  <SharedEndui {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
