import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button';

const Story: ComponentMeta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
	argTypes: {
		variant: {
			defaultValue: 'primary',
			options: ['primary', 'secondary'],
			control: 'select',
		},
		size: {
			defaultValue: 'base',
			options: ['base'],
			control: { type: 'select' },
		},
		width: {
			options: ['full'],
			control: { type: 'select' },
		},
	},
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => (
	<Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
	variant: 'secondary',
};
