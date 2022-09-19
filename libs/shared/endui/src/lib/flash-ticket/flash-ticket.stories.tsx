import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FlashTicket } from './flash-ticket';

export default {
  component: FlashTicket,
  title: 'FlashTicket',
} as ComponentMeta<typeof FlashTicket>;

const Template: ComponentStory<typeof FlashTicket> = (args) => (
  <FlashTicket {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
