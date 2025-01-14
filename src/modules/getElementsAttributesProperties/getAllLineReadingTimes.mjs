import { lines, pg00Lines } from './elements.mjs';
import { getLineReadingTimeByLine } from './getLineReadingTimeByLine.mjs';

export const getAllLineReadingTimes = pg00Lines
	.map((line) => getLineReadingTimeByLine(line))
	.forEach((line) => (line.readingTime = `${line.id}.readingTime`));
