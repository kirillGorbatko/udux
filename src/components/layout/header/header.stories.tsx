import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './header';

const Story: ComponentMeta<typeof Header> = {
	title: 'Organisms/Header',
	component: Header,
	argTypes: {
		hasMobileCta: {
			defaultValue: false,
			control: { type: 'select' },
		},
	},
};
export default Story;

const Template: ComponentStory<typeof Header> = (args) => (
	<Header
		{...args}
		navItems={[
			{
				text: 'Events',
				href: './',
			},
			{
				text: 'My Stream Passes',
				href: './',
			},
			{
				text: 'FAQ’s',
				href: './',
			},
		]}
	/>
);

export const Default = Template.bind({});
Default.args = {};
