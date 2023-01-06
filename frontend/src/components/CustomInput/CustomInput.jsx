


import { Container } from './CustomInput.styles';

export const CustomInput = ({
	rightPart,
	onChange,
	placeholder,
	borderradius,
	rows,
	sx = { padding: '10px', fontSize: '20px', color: 'LightGrey' },
	size = 30,
	icon,
	color,
	children,
	width,
	startAdornment,
	multiline = true,
	type,
	hovered,
	inputProps,
	...props
}) => {
	return (
		<>
			<Container
				{...props}
				placeholder={placeholder}
				disableunderline='true'
				onChange={onChange}
				endadornment={rightPart}
				borderradius={borderradius}
				minRows={rows}
				multiline={multiline}
				sx={sx}
				width={width}
				hovered={hovered}
				type={type}
				InputProps={{ disableunderline: 'true' }}
				variant='outlined'
				fullWidth
			>
				{children}
			</Container>
		</>
	);
};

