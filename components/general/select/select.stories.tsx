import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

export default {
	title: 'Input/Select',
	component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: 'Select faulty meter.',
	options: ['a', 'b', 'c'],
	placeholder: 'Select',
	errorMsg: 'Please select an item',
	error: false,
	handleChange: () => {
		return;
	},
};
