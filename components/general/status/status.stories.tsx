import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Status } from './Status';

export default {
	title: 'Display/Status',
	component: Status,
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = args => <Status {...args} />;

export const Success = Template.bind({});
Success.args = {
	status: 'success',
	show: true,
	onClose: () => {
		return;
	},
	msg: 'Issue reported',
};

export const Error = Template.bind({});
Error.args = {
	status: 'error',
	show: true,
	onClose: () => {
		return;
	},
	msg: 'Please resolve the errors above',
};
