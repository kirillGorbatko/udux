import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Title } from './title';

const Story: ComponentMeta<typeof Title> = {
	title: 'Atoms/Title',
	component: Title,
};
export default Story;

const Template: ComponentStory<typeof Title> = () => (
	<Title tag="h1">Some title</Title>
);

export const Default = Template.bind({});
Default.args = {};
