import { lines } from '../dom/elements.mjs';
import { lineReadingTime } from './lineReadingTime.mjs';

function getLineReadingTimes() {
	return lines.map((line) => lineReadingTime(line));
}

const allLineReadingTimes = getLineReadingTimes();
const lineIds = lines.map((line) => line.id.toString().concat('Duration'));

export const lineReadingTimesById = lineIds.reduce((acc, id, index) => {
	acc[id] = allLineReadingTimes[index];
	return acc;
}, {});

export const lineDurations = {};

for (const [key, value] of Object.entries(lineReadingTimesById)) {
	lineDurations[key] = value;
}
