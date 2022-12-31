import { render } from '@testing-library/react';
import { Dropdown } from './Dropdown';
import '@testing-library/jest-dom';

const setup = () => {
	const { asFragment } = render(
		<Dropdown
			menuOptions={[
				{
					href: '/',
					isExternal: false,
					displayName: 'home',
				},
			]}
		>
			hi
		</Dropdown>,
	);
	return { asFragment };
};

test('test snapshot', () => {
	const { asFragment } = setup();
	expect(asFragment()).toMatchSnapshot();
});
