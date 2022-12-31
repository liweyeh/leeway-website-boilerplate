import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
	title: 'Input/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const PrimaryBtn = Template.bind({});
PrimaryBtn.args = {
	children: 'Button',
	type: 'primary',
	size: 'large',
};

export const SecondaryBtn = Template.bind({});
SecondaryBtn.args = {
	children: 'Button',
	type: 'secondary',
	size: 'small',
};

export const DisabledBtn = Template.bind({});
DisabledBtn.args = {
	children: 'Button',
	type: 'disabled',
	size: 'large',
};
