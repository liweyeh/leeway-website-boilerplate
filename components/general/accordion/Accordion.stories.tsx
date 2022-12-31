import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from './Accordion';

export default {
	title: 'Display/Accordion',
	component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = args => <Accordion {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	headerContent: 'Testing accordion',
	children: 'Accordion Content',
};
