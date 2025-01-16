// import { elements } from './modules/getElementsAttributesProperties/elements.mjs';
import { animations_player } from './modules/controlAnimations/animations_player.mjs';
// import { vanishFrames } from './modules/animations/keyframeEffects/page/vanishFrames.mjs';
// import { lineBarkFrames } from './modules/animations/keyframeEffects/line/lineBarkFrames.mjs';
// import { wordCrunchFrames } from './modules/animations/keyframeEffects/word/wordCrunchFrames.mjs';
// import { rabbitDownKeyframes } from './modules/animations/rabbitDownKeyframes.mjs';
import { overall_duration } from './modules/controlAnimations/overall_duration.mjs';

const canvas = document.getElementById('canvas');
const scale = document.getElementById('scale');
const preview = document.getElementById('preview');
const controls = document.getElementById('controls');
const playback = document.getElementById('playback');
const marker = document.getElementById('playback-marker');
const result = document.querySelector('#result span');

const canvas_width = parseInt(getComputedStyle(canvas).width, 10);
const half_canvas_width = canvas_width / 2;

const timing_options = {
	duration: 1000,
	fill: 'forwards',
};

const channels = {
	word: [
		{ transform: 'translateX(0px)', easing: 'ease-out' },
		{ transform: 'translateX(1000px)', easing: 'ease-in' },
		{ transform: 'translateX(0px)' },
	],
	position: {
		transform: [`translateX(-${half_canvas_width}px)`, `translateX(${half_canvas_width}px)`],
	},
};

// imported function overall_duration(animation) {}
// imported function animations_player(animations) {}

// Start animations and store them

let all_animations = Object.create(null);
Object.keys(channels).forEach(function (name) {
	all_animations[name] = Array.from(document.querySelectorAll(`[data-channel="${name}"][data-animated="true"]`)).map(
		function (element) {
			return element.animate(channels[name], timing_options);
		}
	);
});

const main_animation = all_animations.page.find(function (animation) {
	return animation.effect.target.isSameNode(preview.firstElementChild);
});

const main_player = animations_player(main_animation);
const page_player = animations_player(all_animations.page);
const line_player = animations_player(all_animations.line);
const word_player = animations_player(all_animations.word);

// Inject controls

function update_scale(key, value) {
	const duration = overall_duration(main_animation);
	const timing = main_animation.effect.getTiming();

	const value_label = scale.querySelectorAll(``);
}
