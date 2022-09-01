import React from 'react';
import { TextField } from '@mui/material';

type Props<T> = {
	label: string;
	value: T;
	setValue: (newValue: T) => void;
};

export function Input({ label, value, setValue }: Props<number>) {
	const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number.parseFloat(target.value ?? '0');
		setValue(Number.isNaN(value) ? 0 : value);
	};
	return (
		<div>
			<TextField
				type="number"
				value={value}
				onChange={handleChange}
				label={label}
				margin="normal"
				size="small"
			/>
		</div>
	);
}
