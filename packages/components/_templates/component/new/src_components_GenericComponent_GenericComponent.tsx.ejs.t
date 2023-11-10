---
to: src/components/<%= h.inflection.camelize(name, false) %>/<%= h.inflection.camelize(name, false) %>.tsx
---
import './<%= h.inflection.camelize(name, false) %>.scss';
import React from 'react';

interface <%= h.inflection.camelize(name, false) %>Props {
	arg1?: string,
}

const <%= h.inflection.camelize(name, false) %> = ({ arg1 = 'default' }: <%= h.inflection.camelize(name, false) %>Props) => {
	return (
		<div className="<%= h.inflection.transform(name, ['underscore','dasherize']) %>-class">
			{arg1}
		</div>
	);
};

export default <%= h.inflection.camelize(name, false) %>;
