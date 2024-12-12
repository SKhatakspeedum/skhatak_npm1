import React from 'react';
import { cars } from '..';
import { Cars } from '../cars';

export default {
	title: 'Example/Cars', // Title in the Storybook sidebar
	component: Cars, // Link to your component
	argTypes: {
		color: { control: 'color' }, // Adds a color picker in the controls
		label: { control: 'text' }, // Adds a text input in the controls
	},
};

const Template = (args) => <Cars {...args} />;

// Stories
export const Default = Template.bind({});
Default.args = {
	color: 'red',
	label: 'Car_1',
};

export const BlueCar = Template.bind({});
BlueCar.args = {
	color: 'blue',
	label: 'Car_2',
};
