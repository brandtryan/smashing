// Record of how I finally was able to attach individual word id's:

const paragraphs = document.querySelectorAll('.line');

paragraphs.forEach((paragraph) => {
	const words = paragraph.textContent.split(' ');
	const wrappedWords = words.map((word) => `<span id=${paragraph.id}-w-${word}>${word}</span>`).join(' ');
	paragraph.innerHTML = wrappedWords;
});

const spans = document.querySelectorAll('span');
spans.forEach((span) => {
	console.log(span.id);
});

// const paragraphs = document.querySelectorAll('.line');

// paragraphs.forEach((paragraph) => {
// 	const spans = paragraph.querySelectorAll('span');
// 	spans.forEach((span, index) => {
// 		const paddedIndex = index.toString().padStart(2, '0');
// 		span.id = paragraph.id + '-w' + paddedIndex;
// 	});
// });
