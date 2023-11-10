---
to: src/components/<%= h.inflection.camelize(name, false) %>/<%= h.inflection.camelize(name, false) %>.stories.tsx
---
import './<%= h.inflection.camelize(name, false) %>.scss';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import <%= h.inflection.camelize(name, false) %> from './<%= h.inflection.camelize(name, false) %>';

const meta: Meta<typeof <%= h.inflection.camelize(name, false) %>> = {
  component: <%= h.inflection.camelize(name, false) %>,
};
export default meta;

type Story = StoryObj<typeof <%= h.inflection.camelize(name, false) %>>;

export const Primary: Story = {
  render: (args) => (
    <<%= h.inflection.camelize(name, false) %> />
  ),
};

export const WithArgs: Story = {
  args: {
		arg1: 'hola',
	}
};

