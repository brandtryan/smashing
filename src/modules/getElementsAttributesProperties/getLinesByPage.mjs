import { pages, lines } from './elements.mjs';

export const linesByPage = function getLinesByPage() {
	for (const page of pages) {
		const pageLines = lines.filter((line) => line.parentElement === page);
		return pageLines;
	}
};
