import React from 'react';
import imgRobinhood from '../../Assets/Image/robinhood.png';
import TestimonialCard from './TestimonialCard';

function Testimonials() {
	const testimonials = [
		{
			id: 1,
			username: 'Jeff Bezos',
			review: 'How did you think I became a billionaire?',
		},
		{
			id: 2,
			username: 'Elon Musk',
			review: 'I drive the prices of whatever is being discussed in the group. Join us!',
		},
		{
			id: 3,
			username: 'Justin Beiber',
			review: 'I finally learned investing. I am about to be a billionaire soon',
		},
		{
			id: 4,
			username: 'Selena Gomez',
			review: "Yeah Justin doesn't know shit. He invested in the stocks that we were told not to",
		},
		{
			id: 5,
			username: 'Justin Beiber',
			review: 'Sorry to leave a review again, but stfu Selena.',
		},
		{
			id: 6,
			username: 'Elon Musk',
			review:
				"Sorry to interrupt but Guys! We've got important things to do. Let's focus on Mars for now. And this group of course! Join us!",
		},
	];
	return (
		<section id="reviews" className="relative sm:px-6 lg:px-8 bg-lightbluebg w-full p-4 text-white mt-10">
			<div className="flex flex-justify items-center flex-col pt-20" style={{ fontFamily: 'Gilroy' }}>
				<h1
					className="flex flex-col font-bold text-3xl sm:text-4xl flex-wrap"
					style={{ fontFamily: 'Gilroy-ExtraBold' }}
				>
					Great Outcomes
				</h1>

				<p className="sm:text-lg mt-5 sm:mt-10 text-base">In total, our members have made over 4M+ in profits</p>
			</div>
			<div className="flex flex-row items-center justify-center mt-20 z-10">
				<img
					draggable="false"
					className="hidden md:block"
					src={imgRobinhood}
					alt="screenshot of our member with 100% gains in a month"
					height="440px"
					width="200px"
				/>
				<img
					draggable="false"
					src={imgRobinhood}
					height="540px"
					alt="screenshot of our member with 200% gains in a month"
					width="300px"
				/>
				<img
					draggable="false"
					className="hidden md:block"
					src={imgRobinhood}
					alt="screenshot of our member with 150% gains in a month"
					height="440px"
					width="200px"
				/>
			</div>
			<h1
				className="testimonail font-bold font-white absolute opacity-5 z-0 w-full text-center"
				style={{
					fontFamily: 'Gilroy-ExtraBold',
					top: '40%',
				}}
			>
				Testimonials
			</h1>
			<div className="flex flex-col justify-center items-center">
				<h1
					className="flex flex-col font-bold text-2xl w-full text-center sm:text-4xl justify-center items-center mt-10"
					style={{ fontFamily: 'Gilroy-ExtraBold' }}
				>
					And lots of statisfied members
				</h1>
				<div className=" bg-lightbluebg w-full xl:w-3/5  mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{testimonials &&
						testimonials.map((testimonail) => <TestimonialCard id={testimonail.id} data={testimonail} />)}
				</div>
			</div>
		</section>
	);
}

// Testimonials.propTypes = {};

export default Testimonials;
