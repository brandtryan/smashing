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
