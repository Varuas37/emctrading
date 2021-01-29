import React from 'react';
import imgRobinhood from '../../Assets/Image/robinhood.png';
import { Carousel } from 'react-responsive-carousel';
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
			review: 'I drive the prices of whatever is being discussed in the group. Join us bois',
		},
		{
			id: 3,
			username: 'Justin Beiber',
			review: 'I finally learned investing. I am about to be a billionaire soon',
		},
	];
	return (
		<section id="features" className="relative sm:px-6 lg:px-8 bg-lightbluebg w-full h-full text-white mt-10">
			<div className="flex flex-justify items-center flex-col pt-20" style={{ fontFamily: 'Gilroy' }}>
				<h1
					className="flex flex-col font-bold text-3xl sm:text-4xl flex-wrap"
					style={{ fontFamily: 'Gilroy-ExtraBold' }}
				>
					Great Outcomes
				</h1>

				<p className="sm:text-lg text-base">In total, our members have made over 4M+ in profits</p>
			</div>
			<div className="flex flex-row items-center justify-center mt-20 z-10">
				<img
					className="hidden md:block"
					src={imgRobinhood}
					alt="screenshot of our member with 100% gains in a month"
					height="440px"
					width="200px"
				/>
				<img
					src={imgRobinhood}
					height="540px"
					alt="screenshot of our member with 200% gains in a month"
					width="300px"
				/>
				<img
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
					top: '50%',
				}}
			>
				Testimonials
			</h1>
			<h1
				className="flex flex-col font-bold text-3xl sm:text-4xl justify-center items-center m-10"
				style={{ fontFamily: 'Gilroy-ExtraBold' }}
			>
				And lots of statisfied members
			</h1>
			<div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{testimonials &&
					testimonials.map((testimonail) => <Testimonials id={testimonail.id} feature={testimonail} />)}
			</div>
		</section>
	);
}

// Testimonials.propTypes = {};

export default Testimonials;
