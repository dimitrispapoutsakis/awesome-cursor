export const rgbStringToArray = (rgbString: string) => {
	// "rgb(255, 255, 255)" => [255, 255, 255]
	return rgbString?.match(/\d+/g)?.map(Number);
};

export const isDarkEl = (el: HTMLElement) => {
	const bg = window.getComputedStyle(el).backgroundColor;
	if (!bg.startsWith('rgb')) return; // skip transparent or gradients
	const [r, g, b] = rgbStringToArray(bg) ?? [0, 0, 0];
	const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
	return luminance < 128;
};

export const isHoveringToAnchor = (
	hoveringEl: HTMLElement,
	anchorEl?: string,
) => {
	return (
		hoveringEl.classList.contains(anchorEl?.replace('.', '') as string) ||
		hoveringEl.tagName.toString().toLowerCase() === anchorEl
	);
};
