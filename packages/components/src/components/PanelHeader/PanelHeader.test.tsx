import React from 'react';
import { render } from '@testing-library/react';

import PanelHeader from './PanelHeader';

describe('Tabs', () => {
	test('renders the Tabs component', () => {
		render(<PanelHeader />);
	});
});
