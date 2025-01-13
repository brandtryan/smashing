import { lineDurations } from './modules/controlAnimations/lineDurations.mjs';
import { pg00Elements } from './modules/dom/elements.mjs';
import { animations_player } from './modules/controlAnimations/animations_player.mjs';
import { crunchKeyframes, crunchTiming } from './modules/animations/crunchAnima.mjs';

const pg00Words = pg00Elements.filter((element) => element.id.includes('wrd'));
  
// Create pg00 WORD animations and store the Animation objects in an array

let all_animations = Object.create(null);
let word_animations = [crunchKeyframes, crunchTiming];

const animationArrays = {
	word: [word_animations],
	// line: [line_animations],
	// page: [page_animations],
};

Object.keys(animationArrays).forEach(function (name) {
	all_animations[name] = pg00Words.map(function (element) {
		return element.animate(animationArrays[name]);
	});
});

word_animations = all_animations.word;

// line_animations = all_animations.line;
// page_animations = all_animations.page;

const word_player = animations_player(word_animations);
// const line_player = animations_player(line_animations);
// const page_player = animations_player(page_animations);

// all_animations.addEventListener('finish', function () {
// 	word_player.stop();
// });

// Set duration of each word animation to be reading time divided by number of word animations

const pg00Duration =
	lineDurations.pg00ln00Duration +
	lineDurations.pg00ln01Duration +
	lineDurations.pg00ln02Duration +
	lineDurations.pg00ln03Duration +
	lineDurations.pg00ln04Duration +
	lineDurations.pg00ln05Duration +
	lineDurations.pg00ln06Duration +
	lineDurations.pg00ln07Duration;

console.log(pg00Duration);

// word_animations.forEach((item) => item.effect.updateTiming({ duration: pg00Duration / word_animations.length }));
word_animations.forEach((item) => item.effect.updateTiming({ duration: 800 }));

// Set startTime of each word animation so each starts after the previous animation, fitting to reading time
word_animations[0].startTime = 1000.0;

for (let i = 1; i < word_animations.length - 1; i++) {
	// word_animations[i].startTime = word_animations[i - 1].startTime + pg00Duration / pg00Words.length;
	word_animations[i].startTime = word_animations[i - 1].startTime + 2000;
}

console.log(`pg00 Duration = ${pg00Duration}
             pg00 Words = ${pg00Words.length}`);

console.log(all_animations);


// word_player.play();

//Set duration of line animations based on average reading time
// const s00p00ln00Duration = lineReadingTime(s00p00ln00Words);
// const s00p00ln01Duration = lineReadingTime(s00p00ln01Words);
// const s00p00ln02Duration = lineReadingTime(s00p00ln02Words);
// const s00p00ln03Duration = lineReadingTime(s00p00ln03Words);
// const s00p00ln04Duration = lineReadingTime(s00p00ln04Words);
// const s00p00ln05Duration = lineReadingTime(s00p00ln05Words);
// const s00p00ln06Duration = lineReadingTime(s00p00ln06Words);
// const s00p00ln07Duration = lineReadingTime(s00p00ln07Words);
// const s00p00ln08Duration = lineReadingTime(s00p00ln08Words);

// // Create LINE 0 WORD animations and store the Animation objects in an array
// const s00p00ln00WordAnimas = [];

// for (const word of s00p00ln00Words) {
// 	s00p00ln00WordAnimas.push(word.animate(breathframes, breathtiming));
// }

// console.log(s00p00ln00WordAnimas[0]);

// // // Set duration of each word animation to be reading time divided by number of word animations
// s00p00ln00WordAnimas.forEach((item) =>
// 	item.effect.updateTiming({ duration: s00p00ln00Duration / s00p00ln00Words.length })
// );
// // Set startTime of each word animation so each starts after the previous animation, fitting to reading time
// line0WordAnimations[0].startTime = 1000.0;
// line0WordAnimations[1].startTime = line0WordAnimations[0].startTime + line0Duration / line0WordAnimations.length;

// console.log('Line0_0 overall = ' + overall_duration(line0WordAnimations[0]));
// console.log('Line0_1 overall = ' + overall_duration(line0WordAnimations[1]));

// // Create LINE 1 WORD animations and store the Animation objects in an array
// const line1WordAnimations = [ln1w6.animate(breathFrames, breathTiming), ln1w14.animate(breathFrames, breathTiming)];

// // Set duration of each word animation to be reading time divided by number of word animations
// line1WordAnimations.forEach((item) => item.effect.updateTiming({ duration: line1Duration / 4 }));
// // Set startTime of each word animation so each starts after the previous animation, fitting to reading time
// line1WordAnimations[0].startTime = line0Duration + 1000.0;
// line1WordAnimations[1].startTime = line1WordAnimations[0].startTime + line0Duration / line1WordAnimations.length;

// console.log('Line1_0 overall = ' + overall_duration(line1WordAnimations[0]));
// console.log('Line1_1 overall = ' + overall_duration(line1WordAnimations[1]));

// // MISC FUNCTIONS

// const animation = sampleElements.map(Element => Element.animate(keyframes, timing));

// const player = animationsPlayer(s00p00ln00Animas);
// player.play();

// const linesReadingTimesArray = [];
// const lineAnimations = [];

// const lineWordCounts = s00Lines.map((line) => line.childElementCount);

// for (let count of lineWordCounts) {
// 	let result = lineReadingTime(count);
// 	linesReadingTimesArray.push(result);
// }

// for (let line of s00Lines) {
// 	line.animate(breathFrames, breathTiming);
// 	lineAnimations.push(line.getAnimations());
// }

// console.log(nowTimeLine.currentTime);

// Create PAGE animations and store the animation objects in an array
// const pageAnimations = [s00.animate(headShakeFrames, headShakeTiming)];
// Set PAGE animations startTime
// ?????????????????????????????

// Create PARAGRAPH animations and store the Animation objects in an array
// const paragraphAnimations = [s00p00.animate(barkFrames, barkTiming)];
// Set PARAGRAPH animations startTime
// ?????????????????????????????

// Create LINE animations and store the Animation objects in an array
// const line0Animations = [s00p00ln00.animate(breathFrames, breathTiming)];
// Set LINE animations startTime to start directly after reading time for line

// for (let lineAnimation of lineAnimations) {
// 	for (let i = 0; i < lineAnimation.length; i++) {
// 		setLineAnimaStartTime(lineAnimation, linesReadingTimesArray[i], 2000.0);
// 	}
// }
// setLineAnimaStartTime(line0Animations[0], linesReadingTimesArray[0], 2000.0);

// // Create WORD animations and store the Animation objects in an array
// const line0WordAnimations = [
// 	s00p00ln00w03.animate(breathFrames, breathTiming),
// 	s00p00ln00w08.animate(breathFrames, breathTiming),
// ];
// // Set duration of each word animation to be reading time divided by number of word animations
// line0WordAnimations.forEach((item) => item.effect.updateTiming({ duration: lineDuration0 / 2 }));
// // Set startTime of each word animation so each starts after the previous animation, fitting to reading time
// setWordAnimaStartTime(line0WordAnimations[0], lineDuration0, s00p00ln00.length, 10);
// setWordAnimaStartTime(line0WordAnimations[1], lineDuration0, s00p00ln00.length, 18);

// console.log('Anima0 duration = ' + line0WordAnimations[0].effect.getTiming().duration);
// console.log('Anima1 duration = ' + line0WordAnimations[1].effect.getTiming().duration);
// console.log('Anima0 startTime = ' + line0WordAnimations[0].startTime);
// console.log('Anima1 startTime = ' + line0WordAnimations[1].startTime);
// console.log('Line0_0 overall = ' + overall_duration(line0WordAnimations[0]));
// console.log('Line0_1 overall = ' + overall_duration(line0WordAnimations[1]));
// console.log('Line Reading Time = ' + lineDuration0);

// const animationArrays = {
// 	word: [word_animations],
// 	line: [line_animations],
// 	page: [page_animations],
// };

// // Start animations and store them

// let all_animations = Object.create(null);

// Object.keys(animationArrays).forEach(function (name) {
// 	all_animations[name] = Array.from(document.querySelectorAll(`[data-channel="${name}"]`)).map(function (element) {
// 		return element.animate(animationArrays[name]);
// 	});
// });

// const word_animations = all_animations.word;
// const line_animations = all_animations.line;
// const page_animations = all_animations.page;

// const word_player = animations_player(word_animations);
// const line_player = animations_player(line_animations);
// const page_player = animations_player(page_animations);

// word_animations.addEventListener('finish', function () {
// 	main_player.stop();
// });
