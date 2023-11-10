---
to: src/components/<%= h.inflection.camelize(name, false) %>/<%= h.inflection.camelize(name, false) %>.test.tsx
---
import React from 'react';
import { render } from '@testing-library/react';

import <%= h.inflection.camelize(name, false) %> from './<%= h.inflection.camelize(name, false) %>';

describe('Tabs', () => {
	test('renders the Tabs component', () => {
		render(<<%= h.inflection.camelize(name, false) %> />);
	});
});
