import { getLineReadingTimes } from './getLineReadingTimes.mjs';

const allElements = document.querySelectorAll('*');
const allElementsArray = Array.from(allElements);
export const [elements] = [allElementsArray];

const allPagesCollection = document.getElementsByTagName('div');
const allPagesArray = Array.from(allPagesCollection);
export const [pages] = [allPagesArray];

const allLinesCollection = document.getElementsByTagName('p');
const allLinesArray = Array.from(allLinesCollection);
export const [lines] = [allLinesArray];

const allWordsCollection = document.getElementsByTagName('span');
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

export const pg00Lines = Array.from(document.getElementsByTagName('p'));
export const pg01Lines = Array.from(document.getElementsByTagName('p'));
export const pg02Lines = Array.from(document.getElementsByTagName('p'));
export const pg03Lines = Array.from(document.getElementsByTagName('p'));
export const pg04Lines = Array.from(document.getElementsByTagName('p'));
export const pg05Lines = Array.from(document.getElementsByTagName('p'));
export const pg06Lines = Array.from(document.getElementsByTagName('p'));
export const pg07Lines = Array.from(document.getElementsByTagName('p'));
export const pg08Lines = Array.from(document.getElementsByTagName('p'));
export const pg09Lines = Array.from(document.getElementsByTagName('p'));
export const pg10Lines = Array.from(document.getElementsByTagName('p'));
export const pg11Lines = Array.from(document.getElementsByTagName('p'));
export const pg12Lines = Array.from(document.getElementsByTagName('p'));
export const pg13Lines = Array.from(document.getElementsByTagName('p'));
export const pg14Lines = Array.from(document.getElementsByTagName('p'));
export const pg15Lines = Array.from(document.getElementsByTagName('p'));
export const pg16Lines = Array.from(document.getElementsByTagName('p'));
export const pg17Lines = Array.from(document.getElementsByTagName('p'));
export const pg18Lines = Array.from(document.getElementsByTagName('p'));
export const pg19Lines = Array.from(document.getElementsByTagName('p'));
export const pg20Lines = Array.from(document.getElementsByTagName('p'));
export const pg21Lines = Array.from(document.getElementsByTagName('p'));
export const pg22Lines = Array.from(document.getElementsByTagName('p'));
export const pg23Lines = Array.from(document.getElementsByTagName('p'));
export const pg24Lines = Array.from(document.getElementsByTagName('p'));
export const pg25Lines = Array.from(document.getElementsByTagName('p'));
export const pg26Lines = Array.from(document.getElementsByTagName('p'));
export const pg27Lines = Array.from(document.getElementsByTagName('p'));
export const pg28Lines = Array.from(document.getElementsByTagName('p'));
export const pg29Lines = Array.from(document.getElementsByTagName('p'));
export const pg30Lines = Array.from(document.getElementsByTagName('p'));
export const pg31Lines = Array.from(document.getElementsByTagName('p'));
export const pg32Lines = Array.from(document.getElementsByTagName('p'));
export const pg33Lines = Array.from(document.getElementsByTagName('p'));
export const pg34Lines = Array.from(document.getElementsByTagName('p'));

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
		line.readingTime = getLineReadingTimes(line);
	});
});
