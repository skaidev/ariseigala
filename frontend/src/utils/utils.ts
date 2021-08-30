export const truncateTitle = (
	text: string | undefined,
	length?: number,
): string => {
	const newText = text
		?.split(" ")
		.slice(0, length || 8)
		.join(" ");

	return `${newText}...`;
};

export const truncateDescription = (text: string, length?: number): string => {
	const newText = text
		?.split(" ")
		.slice(0, length || 20)
		.join(" ");

	return `${newText}...`;
};
