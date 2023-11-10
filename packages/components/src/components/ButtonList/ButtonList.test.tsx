import React from 'react';
import { render } from '@testing-library/react';

import ButtonList from './ButtonList';

describe('Tabs', () => {
	test('renders the Tabs component', () => {
		render(<ButtonList />);
	});
});
