import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Carousel } from './carousel';

const heroImages = [
	{
		img: 'images/carousel/1.jpg',
		img2x: 'images/carousel/1@2x.jpg',
	},
	{
		img: 'images/carousel/2.jpg',
		img2x: 'images/carousel/2@2x.jpg',
	},
	{
		img: 'images/carousel/3.jpg',
		img2x: 'images/carousel/3@2x.jpg',
	},
	{
		img: 'images/carousel/4.jpg',
		img2x: 'images/carousel/4@2x.jpg',
	},
	{
		img: 'images/carousel/5.jpg',
		img2x: 'images/carousel/5@2x.jpg',
	},
];

export default {
	title: 'Molecules/Carousel',
	component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
	<Carousel list={[...heroImages, ...heroImages]} />
);

export const Primary = Template.bind({});
