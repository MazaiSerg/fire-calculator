import React from 'react';
import { Grid as MuiGrid } from '@mui/material';

type Props = {
	title?: string;
	headers: string[];
	rows: (string | number)[][];
};

export function Grid({ title, headers, rows }: Props) {
	const transformCell = (cell: number | string) => {
		if (typeof cell === 'string') return cell;
		const roundedNumber = cell.toFixed(0);
		const numberWithSpaces = roundedNumber
			.split('')
			.reverse()
			.map((digit, index) => (index % 3 === 0 ? `${digit} ` : digit))
			.reverse()
			.join('');
		return numberWithSpaces;
	};
	return (
		<div>
			{title && <h3>{title}</h3>}
			<MuiGrid container spacing={2}>
				<MuiGrid container item>
					{headers.map((head) => (
						<MuiGrid item key={head} xs={1}>
							{head}
						</MuiGrid>
					))}
				</MuiGrid>
				{rows.map((row, index) => (
					<MuiGrid container item key={index}>
						{row.map((item) => (
							<MuiGrid item key={item} xs={1}>
								{transformCell(item)}
							</MuiGrid>
						))}
					</MuiGrid>
				))}
			</MuiGrid>
		</div>
	);
}
