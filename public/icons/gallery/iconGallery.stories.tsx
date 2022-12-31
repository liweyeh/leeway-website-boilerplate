import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconGallery } from './IconGallery';

export default {
	title: 'Icons/Gallery',
	component: IconGallery,
} as ComponentMeta<typeof IconGallery>;

const Template: ComponentStory<typeof IconGallery> = () => <IconGallery />;

export const Primary = Template.bind({});
