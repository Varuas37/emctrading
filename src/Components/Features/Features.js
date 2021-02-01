import React from 'react';
import FeatureCards from './FeatureCards';
import imgDollar from '../../Assets/Image/dollar.png';
import imgEducation from '../../Assets/Image/education.png';
import imgCommunity from '../../Assets/Image/community.png';

function Features() {
	const features = [
		{
			id: 1,
			title: 'Great Trades',
			image: imgDollar,
			detail: 'Experienced Traders Post Trusted Trades Daily',
			bg: 'primarybg',
		},
		{
			id: 2,
			title: 'Excellent Education',
			image: imgEducation,
			detail: 'Nightly Recorded Q&A Sessions and Lessons',
			bg: 'primarybg',
		},
		{
			id: 3,
			title: 'Healthy Community',
			image: imgCommunity,
			detail: 'We are a caring community. All of your questions will be answered, even the most difficult',
			bg: 'primarybg',
		},
	];

	return (
		<section id="features" className="bg-lightbluebg text-white pt-7">
			<h1
				className="flex flex-col items-center justify-center font-bold text-3xl ml-10 sm:p-0 sm:text-5xl text m-2 flex-wrap"
				style={{ fontFamily: 'Gilroy-ExtraBold' }}
			>
				Features
			</h1>
			<div className="flex justify-center items-center w-full">
				<div className="w-4/5 mt-5 max-w-7xl sm:m-0 sm:mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{features && features.map((feature) => <FeatureCards id={feature.id} feature={feature} />)}
				</div>
			</div>
		</section>
	);
}

export default Features;
