import { render } from '@testing-library/react';
import { Accordion } from './Accordion';
import '@testing-library/jest-dom';

const setup = () => {
	const { asFragment } = render(
		<Accordion headerContent={<p>Title</p>}>
			<p>Body Content</p>
		</Accordion>,
	);
	return { asFragment };
};

test('test snapshot', () => {
	const { asFragment } = setup();
	expect(asFragment()).toMatchSnapshot();
});
