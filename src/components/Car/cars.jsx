import React from 'react';

export const Cars = ({ color = 'red', label = 'Car_1' }) => {
	return <h2 style={{ color }}>{label}</h2>;
};
