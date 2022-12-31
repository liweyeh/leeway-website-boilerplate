import { render } from '@testing-library/react';
import { MainLayout } from './MainLayout';
import '@testing-library/jest-dom';

jest.mock('next/config', () => () => ({
	publicRuntimeConfig: {},
	serverRuntimeConfig: {},
}));
const setup = () => {
	const { asFragment } = render(
		<MainLayout>
			<div>Main Layout:</div>
		</MainLayout>,
	);
	return { asFragment };
};

test('test snapshot', () => {
	const { asFragment } = setup();
	expect(asFragment()).toMatchSnapshot();
});
