import './PanelHeader.scss';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import PanelHeader from './PanelHeader';

const meta: Meta<typeof PanelHeader> = {
  component: PanelHeader,
};
export default meta;

type Story = StoryObj<typeof PanelHeader>;

export const Primary: Story = {
  render: (args) => (
    <PanelHeader />
  ),
};

export const WithArgs: Story = {
  args: {
		arg1: 'hola',
	}
};

