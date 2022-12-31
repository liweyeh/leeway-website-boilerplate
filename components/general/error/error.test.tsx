import { render } from '@testing-library/react';
import { Error } from './Error';
import '@testing-library/jest-dom';

const setup = (status: string) => {
	const { asFragment } = render(<Error statusCode={status} />);
	return { asFragment };
};

test('test Error 404 snapshot', () => {
	const { asFragment } = setup('404');
	expect(asFragment()).toMatchSnapshot();
});

test('test Error 500 snapshot', () => {
	const { asFragment } = setup('500');
	expect(asFragment()).toMatchSnapshot();
});
