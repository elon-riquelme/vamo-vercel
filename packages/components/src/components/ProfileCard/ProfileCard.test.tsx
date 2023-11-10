import React from 'react';
import { render } from '@testing-library/react';

import ProfileCard from './ProfileCard';

describe('Tabs', () => {
	test('renders the Tabs component', () => {
		render(<ProfileCard name="John Doe" bio="Software Engineer" imgSrc="https://loremflickr.com/40/40"/>);
	});
});
