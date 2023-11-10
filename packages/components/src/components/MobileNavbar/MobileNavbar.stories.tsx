import './MobileNavbar.scss';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import MobileNavbar from './MobileNavbar';

const meta: Meta<typeof MobileNavbar> = {
  component: MobileNavbar,
};
export default meta;

type Story = StoryObj<typeof MobileNavbar>;

export const Primary: Story = {
  render: (args) => (
    <MobileNavbar>
      <MobileNavbar.Button>A</MobileNavbar.Button>
      <MobileNavbar.Button>B</MobileNavbar.Button>
      <MobileNavbar.Button>C</MobileNavbar.Button>
    </MobileNavbar>
  ),
};
