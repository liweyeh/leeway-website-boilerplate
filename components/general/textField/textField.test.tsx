import { render } from '@testing-library/react';
import { TextField } from './TextField';
import '@testing-library/jest-dom';

const setup = (status: 'error' | 'valid') => {
	const { asFragment } = render(
		<TextField
			placeholder={'Please give it a name'}
			errorMsg="Please input a new name or press x to cancel"
			status={status}
			handleChange={() => {
				return;
			}}
		/>,
	);
	return { asFragment };
};

test('test textfield snapshot', () => {
	const { asFragment } = setup('valid');
	expect(asFragment()).toMatchSnapshot();
});

test('test error textfield snapshot', () => {
	const { asFragment } = setup('error');
	expect(asFragment()).toMatchSnapshot();
});
