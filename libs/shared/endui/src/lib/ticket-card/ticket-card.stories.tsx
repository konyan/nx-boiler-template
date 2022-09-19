import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TicketCard } from './ticket-card';

export default {
  component: TicketCard,
  title: 'TicketCard',
} as ComponentMeta<typeof TicketCard>;

const Template: ComponentStory<typeof TicketCard> = (args) => (
  <TicketCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
