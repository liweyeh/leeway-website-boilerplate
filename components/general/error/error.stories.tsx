import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Error } from './Error';

export default {
	title: 'Display/Error',
	component: Error,
	decorators: [
		Story => (
			<div style={{ marginTop: '50px' }}>
				<Story />
			</div>
		),
	],
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = args => <Error {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	statusCode: '404',
};
