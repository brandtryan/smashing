import { lines } from './elements.mjs';

export function getLineWordCountsByPage(page) {
	return lines.filter((line) => line.id.includes(page)).map((line) => getLineWordCount(line));
}
