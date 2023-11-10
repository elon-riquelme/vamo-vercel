import React from 'react';
import { render } from '@testing-library/react';

import MobileNavbar from './MobileNavbar';

describe('Tabs', () => {
	test('renders the Tabs component', () => {
		render(<MobileNavbar />);
	});
});
