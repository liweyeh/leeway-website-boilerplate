import { render } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';

const setup = (type: 'primary' | 'secondary' | 'default' | 'disabled', size: 'small' | 'large') => {
	const { asFragment } = render(
		<Button
			onClick={() => {
				// eslint-disable-next-line no-console
				console.log('button clicked');
			}}
			type={type}
			size={size}
		>
			Button Test
		</Button>,
	);
	return { asFragment };
};

test('test snapshot', () => {
	const { asFragment } = setup('default', 'large');
	const firstRender = asFragment();
	expect(firstRender).toMatchSnapshot();
});
