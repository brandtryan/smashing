import { getLineReadingTimeByLine } from './getLineReadingTimeByLine.mjs';

const allElements = document.querySelectorAll('*');
const allElementsArray = Array.from(allElements);
export const [elements] = [allElementsArray];

const allPagesCollection = document.getElementsByClassName('page');
const allPagesArray = Array.from(allPagesCollection);
export const [pages] = [allPagesArray];

const allLinesCollection = document.getElementsByClassName('line');
const allLinesArray = Array.from(allLinesCollection);
export const [lines] = [allLinesArray];

const allWordsCollection = document.getElementsByClassName('word');
const allWordsArray = Array.from(allWordsCollection);
export const [words] = [allWordsArray];

export const pg00Elements = [];
export const pg01Elements = [];
export const pg02Elements = [];
export const pg03Elements = [];
export const pg04Elements = [];
export const pg05Elements = [];
export const pg06Elements = [];
export const pg07Elements = [];
export const pg08Elements = [];
export const pg09Elements = [];
export const pg10Elements = [];
export const pg11Elements = [];
export const pg12Elements = [];
export const pg13Elements = [];
export const pg14Elements = [];
export const pg15Elements = [];
export const pg16Elements = [];
export const pg17Elements = [];
export const pg18Elements = [];
export const pg19Elements = [];
export const pg20Elements = [];
export const pg21Elements = [];
export const pg22Elements = [];
export const pg23Elements = [];
export const pg24Elements = [];
export const pg25Elements = [];
export const pg26Elements = [];
export const pg27Elements = [];
export const pg28Elements = [];
export const pg29Elements = [];
export const pg30Elements = [];
export const pg31Elements = [];
export const pg32Elements = [];
export const pg33Elements = [];
export const pg34Elements = [];

for (const element of elements) {
	for (let i = 0; i <= 35; i++) {
		const formattedIndex = i.toString().padStart(2, '0');
		const str = i.toString().padStart(2, '0');
		if (element.id.startsWith(`pg${formattedIndex}`)) {
			eval(`pg${str}Elements`).push(element);
		}
	}
}

export const pg00Lines = pg00Elements.filter((element) => element.className === 'line');
export const pg01Lines = pg01Elements.filter((element) => element.className === 'line');
export const pg02Lines = pg02Elements.filter((element) => element.className === 'line');
export const pg03Lines = pg03Elements.filter((element) => element.className === 'line');
export const pg04Lines = pg04Elements.filter((element) => element.className === 'line');
export const pg05Lines = pg05Elements.filter((element) => element.className === 'line');
export const pg06Lines = pg06Elements.filter((element) => element.className === 'line');
export const pg07Lines = pg07Elements.filter((element) => element.className === 'line');
export const pg08Lines = pg08Elements.filter((element) => element.className === 'line');
export const pg09Lines = pg09Elements.filter((element) => element.className === 'line');
export const pg10Lines = pg10Elements.filter((element) => element.className === 'line');
export const pg11Lines = pg11Elements.filter((element) => element.className === 'line');
export const pg12Lines = pg12Elements.filter((element) => element.className === 'line');
export const pg13Lines = pg13Elements.filter((element) => element.className === 'line');
export const pg14Lines = pg14Elements.filter((element) => element.className === 'line');
export const pg15Lines = pg15Elements.filter((element) => element.className === 'line');
export const pg16Lines = pg16Elements.filter((element) => element.className === 'line');
export const pg17Lines = pg17Elements.filter((element) => element.className === 'line');
export const pg18Lines = pg18Elements.filter((element) => element.className === 'line');
export const pg19Lines = pg19Elements.filter((element) => element.className === 'line');
export const pg20Lines = pg20Elements.filter((element) => element.className === 'line');
export const pg21Lines = pg21Elements.filter((element) => element.className === 'line');
export const pg22Lines = pg22Elements.filter((element) => element.className === 'line');
export const pg23Lines = pg23Elements.filter((element) => element.className === 'line');
export const pg24Lines = pg24Elements.filter((element) => element.className === 'line');
export const pg25Lines = pg25Elements.filter((element) => element.className === 'line');
export const pg26Lines = pg26Elements.filter((element) => element.className === 'line');
export const pg27Lines = pg27Elements.filter((element) => element.className === 'line');
export const pg28Lines = pg28Elements.filter((element) => element.className === 'line');
export const pg29Lines = pg29Elements.filter((element) => element.className === 'line');
export const pg30Lines = pg30Elements.filter((element) => element.className === 'line');
export const pg31Lines = pg31Elements.filter((element) => element.className === 'line');
export const pg32Lines = pg32Elements.filter((element) => element.className === 'line');
export const pg33Lines = pg33Elements.filter((element) => element.className === 'line');
export const pg34Lines = pg34Elements.filter((element) => element.className === 'line');

export const pgLines = [
	pg00Lines,
	pg01Lines,
	pg02Lines,
	pg03Lines,
	pg04Lines,
	pg05Lines,
	pg06Lines,
	pg07Lines,
	pg08Lines,
	pg09Lines,
	pg10Lines,
	pg11Lines,
	pg12Lines,
	pg13Lines,
	pg14Lines,
	pg15Lines,
	pg16Lines,
	pg17Lines,
	pg18Lines,
	pg19Lines,
	pg20Lines,
	pg21Lines,
	pg22Lines,
	pg23Lines,
	pg24Lines,
	pg25Lines,
	pg26Lines,
	pg27Lines,
	pg28Lines,
	pg29Lines,
	pg30Lines,
	pg31Lines,
	pg32Lines,
	pg33Lines,
	pg34Lines,
];

pgLines.forEach((pgLineArray) => {
	pgLineArray.forEach((line) => {
		line.readingTime = getLineReadingTimeByLine(line);
	});
});
