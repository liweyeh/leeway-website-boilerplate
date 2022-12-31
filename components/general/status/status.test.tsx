import { render } from '@testing-library/react';
import { Status } from './Status';
import '@testing-library/jest-dom';

const setup = (status: 'error' | 'success') => {
	const { asFragment } = render(
		<Status
			status={status}
			show={true}
			onClose={() => {
				return;
			}}
			msg="Please resolve the errors above"
		/>,
	);
	return { asFragment };
};

test('test success status snapshot', () => {
	const { asFragment } = setup('success');
	expect(asFragment()).toMatchSnapshot();
});

test('test error status snapshot', () => {
	const { asFragment } = setup('error');
	expect(asFragment()).toMatchSnapshot();
});
