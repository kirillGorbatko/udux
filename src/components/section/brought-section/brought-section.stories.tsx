import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BroughtSection } from './brought-section';
import bgImage from '@/../public/images/brought/bg.png';
import bgMobileImage from '@/../public/images/brought/bg_mob.png';
import woomanImage from '@/../public/images/brought/woman.jpg';

const Story: ComponentMeta<typeof BroughtSection> = {
	title: 'Organisms/BroughtSection',
	component: BroughtSection,
	argTypes: {
		title: {
			defaultValue: 'Brought to you by',
			control: { type: 'text' },
		},
		bgPicture: {
			defaultValue: {
				img: bgImage,
				imgMob: bgMobileImage,
			},
		},
		contentPicture: {
			defaultValue: {
				img: woomanImage,
			},
		},
	},
};
export default Story;

const Template: ComponentStory<typeof BroughtSection> = (args) => (
	<BroughtSection {...args}>
		<p>
			Africa to the World is a movement pioneered by uduX - Africa’s first
			indigenous music platform.
		</p>
		<p>
			For us this platform is the express path to a global audience. From Africa
			to the world and back to Africa.
		</p>
		<p>
			We want you to experience alongside Africa’s biggest stars, powered by the
			belief that <br /> - One day you’ll be the master of your own stage.
		</p>
	</BroughtSection>
);

export const Default = Template.bind({});
Default.args = {};
