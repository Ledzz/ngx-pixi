export const parseColor = (color: string | number, defaultColor = 0x000000): number => {
	if (!color) {
		return 0x000000;
	}

	return parseInt(`${color}`.replace('#', ''), 16);
};
