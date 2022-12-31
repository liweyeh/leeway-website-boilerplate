import { render } from '@testing-library/react';
import { Skeleton } from './Skeleton';
import '@testing-library/jest-dom';

const setup = () => {
	const { asFragment } = render(<Skeleton />);
	return { asFragment };
};

test('test snapshot', () => {
	const { asFragment } = setup();
	expect(asFragment()).toMatchSnapshot();
});
