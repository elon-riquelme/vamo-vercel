import './ButtonList.scss';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import ButtonList from './ButtonList';

const meta: Meta<typeof ButtonList> = {
  component: ButtonList,
};
export default meta;

type Story = StoryObj<typeof ButtonList>;

export const Primary: Story = {
  render: (args) => (
    <ButtonList>
      <ButtonList.Button>
        <span className="left-navbar__label">Home</span>
      </ButtonList.Button>
      <ButtonList.Button>
        <span className="left-navbar__label">Settings</span>
      </ButtonList.Button>
  </ButtonList>
  ),
};


