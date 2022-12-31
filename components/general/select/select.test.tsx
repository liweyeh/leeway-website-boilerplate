import { render } from '@testing-library/react';
import { Select } from './Select';
import '@testing-library/jest-dom';

const setup = (error: boolean) => {
	const { asFragment } = render(
		<Select
			label="Select faulty meter."
			options={['a', 'b', 'c']}
			placeholder="Select"
			errorMsg="Please select an item"
			error={error}
			handleChange={() => {
				return;
			}}
		/>,
	);
	return { asFragment };
};

test('test Select snapshot', () => {
	const { asFragment } = setup(false);
	expect(asFragment()).toMatchSnapshot();
});

test('test error Select snapshot', () => {
	const { asFragment } = setup(true);
	expect(asFragment()).toMatchSnapshot();
});
