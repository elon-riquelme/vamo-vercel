import { StoryObj, Meta } from '@storybook/react';
import Tabs from './Tabs';
import './Tabs.scss';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
  args: {
		tabs: [
			{id: 1, text: 'Tab 1'},
			{id: 1, text: 'Tab 2'},
			{id: 2, text: 'Tab 3', active: true}
		],
	}
};

export const Secondary: Story = {
  args: {
	tabs: [
		{id: 1, text: 'Tab 3', active: true},
		{id: 1, text: 'Tab 2'},
		{id: 2, text: 'Tab 1'}
	],
}};
