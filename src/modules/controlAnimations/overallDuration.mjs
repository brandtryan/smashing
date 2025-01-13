export function overallDuration(animation) {
	const timing = animation.effect.getTiming();
	return timing.delay + timing.iterations * timing.duration + timing.endDelay;
}
