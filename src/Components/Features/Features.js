import React from 'react';
import FeatureCards from './FeatureCards';

function Features() {
	const features = [
		{ id: 1, title: 'Best Training Group', image: 'image', detail: 'More Details', bg: 'primarybg' },
		{ id: 2, title: 'Best Training Group', image: 'image', detail: 'More Details', bg: 'primarybg' },
		{ id: 3, title: 'Best Training Group', image: 'image', detail: 'More Details', bg: 'primarybg' },
		{ id: 4, title: 'Best Training Group', image: 'image', detail: 'More Details', bg: 'primarybg' },
		{ id: 5, title: 'Best Training Group', image: 'image', detail: 'More Details', bg: 'primarybg' },
		{ id: 6, title: 'Best Training Group', image: 'image', detail: 'More Details', bg: 'primarybg' },
	];

	return (
		<section id="features" className="max-w-7xl mx-auto mt-7 sm:px-6 lg:px-8">
			<h1
				className="flex flex-col font-bold text-5xl bg text m-2 flex-wrap"
				style={{ fontFamily: 'Gilroy-ExtraBold' }}
			>
				Features
			</h1>

			<div className="g-lightbluebg w-full xl:w-3/5  mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{features && features.map((feature) => <FeatureCards id={feature.id} feature={feature} />)}
			</div>
		</section>
	);
}

export default Features;
