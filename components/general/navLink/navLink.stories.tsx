import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavLink } from './NavLink';

export default {
	title: 'General/NavLink',
	component: NavLink,
} as ComponentMeta<typeof NavLink>;

const Template: ComponentStory<typeof NavLink> = args => <NavLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	href: 'www.google.com',
	children: <p>hi</p>,
};
