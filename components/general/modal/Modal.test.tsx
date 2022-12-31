import { render } from '@testing-library/react';
import { Modal } from './Modal';
import '@testing-library/jest-dom';

const setup = () => {
	const { asFragment } = render(
		<Modal open={true}>
			<p>Modal body content</p>
		</Modal>,
	);
	return { asFragment };
};

test('test snapshot', () => {
	const { asFragment } = setup();
	expect(asFragment()).toMatchSnapshot();
});
