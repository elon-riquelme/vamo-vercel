import React from 'react';
import { render } from '@testing-library/react';

import Tabs from './Tabs';

describe('Tabs', () => {
	test('renders the Tabs component', () => {
		render(<Tabs tabs={[
			{id: 1, text: 'Tab 1'},
			{id: 1, text: 'Tab 2'},
			{id: 2, text: 'Tab 3', active: true}
		]} createInternalLink={()=>(<div></div>)}/>);
	});
});
