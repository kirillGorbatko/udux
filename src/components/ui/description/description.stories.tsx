import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Description } from './description';

const Story: ComponentMeta<typeof Description> = {
	title: 'Atoms/Description',
	component: Description,
	argTypes: {
		size: {
			defaultValue: 'base',
			options: ['xs', 'base', 'lg'],
			control: { type: 'select' },
		},
	},
};
export default Story;

const Template: ComponentStory<typeof Description> = (args) => (
	<Description {...args}>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nulla
		veritatis et perferendis voluptas itaque hic at nobis repellat soluta,
		dolorem, molestiae officiis nesciunt doloribus tempore. Repellat natus quam
		cumque.
	</Description>
);

export const Default = Template.bind({});
Default.args = {};
