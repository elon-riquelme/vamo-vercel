import './ProfileCard.scss';
import { StoryObj, Meta } from '@storybook/react';
import ProfileCard from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  component: ProfileCard,
};
export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const WithArgs: Story = {
  args: {
		name: 'John Doe',
    bio: 'Software Engineer',
    imgSrc: "https://loremflickr.com/40/40",
	}
};

