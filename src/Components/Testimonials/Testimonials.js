import React from 'react';
import imgApple from '../../Assets/Image/apple.png';
import imgHomeDepot from '../../Assets/Image/homeDepot.png';
import imgTesla from '../../Assets/Image/tesla.png';
import TestimonialCard from './TestimonialCard';

function Testimonials() {
	const testimonials = [
		{
			id: 1,
			username: 'Jake M',
			review:
				'“Stoff Capital is amazing. Everyone is so helpful, and there is a huge emphasis on education unlike some other servers.”',
		},
		{
			id: 2,
			username: 'Rohan T ',
			review: '“The trades that the staff post are amazing.”',
		},
		{
			id: 3,
			username: 'Sarah R',
			review:
				'“My favorite thing about this server are the Q&A sessions. I have learnt a lot about trading, and I find all of the recorded lessons very helpful as well.”',
		},
	];
	return (
		<section id="reviews" className="relative sm:px-6 lg:px-8 bg-lightbluebg w-full p-4 text-white">
			<div className="flex flex-justify items-center flex-col pt-20" style={{ fontFamily: 'Gilroy' }}>
				<h1
					className="flex flex-col font-bold text-4xl sm:text-5xl flex-wrap"
					style={{ fontFamily: 'Gilroy-ExtraBold' }}
				>
					Great Outcomes
				</h1>

				{/* <p className="sm:text-xl mt-4 text-lg sm:mt-6 text-base">UnComment to put a subtext</p> */}
			</div>
			<div className="flex flex-row items-center justify-center mt-20 z-10">
				<img
					draggable="false"
					className="hidden md:block"
					src={imgApple}
					alt="screenshot of our member with 100% gains in a month"
					height="440px"
					width="200px"
				/>
				<img
					draggable="false"
					src={imgTesla}
					height="540px"
					alt="screenshot of our member with 200% gains in a month"
					width="300px"
				/>
				<img
					draggable="false"
					className="hidden md:block"
					src={imgHomeDepot}
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
					Lots of Satisfied Customers
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
