import { render } from '@testing-library/react';
import { NavLink } from './NavLink';
import '@testing-library/jest-dom';

const setup = () => {
	const { asFragment } = render(
		<NavLink href="www.google.com">
			<p>hi</p>
		</NavLink>,
	);
	return { asFragment };
};

test('test snapshot', () => {
	const { asFragment } = setup();
	expect(asFragment()).toMatchSnapshot();
});
