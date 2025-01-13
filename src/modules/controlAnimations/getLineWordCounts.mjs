import { lines, pages } from '../../dom/elements.mjs';

export function getLineWordCounts(page) {
	return lines.filter((line) => line.id.includes(page)).map((line) => getLineWordCount(line));
}
