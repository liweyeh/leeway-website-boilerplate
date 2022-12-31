import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from './TextField';

export default {
	title: 'Input/TextField',
	component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	placeholder: 'Please give it a name',
	handleChange: () => {
		return;
	},
	status: 'valid',
	errorMsg: 'Please complete this field',
};

export const Error = Template.bind({});
Error.args = {
	placeholder: 'Please give it a name',
	handleChange: () => {
		return;
	},
	status: 'error',
	errorMsg: 'Please complete this field',
};

export const Textarea = Template.bind({});
Textarea.args = {
	type: 'textarea',
	label: 'Please provide more details.',
	placeholder: 'E.g. Details should be XXXX',
	handleChange: () => {
		return;
	},
	status: 'valid',
	errorMsg: 'Please complete this field',
};
