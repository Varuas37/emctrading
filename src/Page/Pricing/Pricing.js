import React from 'react';
import PricingCards from "./PricingCards"
import imgGeneral from '../../Assets/Image/generalmember.svg';
import imgDiamondMember from '../../Assets/Image/diamondM.svg';

function Pricing(props) {
	const discordLink = 'https://discord.gg/6BnZXEDu';
	const pricing = [
		{
			id: 1,
			title: 'Pro',
			price: '$15 per month',
			image: imgDiamondMember,
			color: '#F64B9D',
			link: 'https://upgrade.chat/shop/455927928618745869',
		},
		{
			id: 2,
			title: 'General Member',
			price: 'Free! Join Now',
			image: imgGeneral,
			color: '#7289DA',
			link: discordLink,
		},
	];
	return (
		<section
			className="flex flex-col w-full bg-lightbluebg justify-center items-center pb-20"
			id="pricing"
			style={{ height: 'fit-content' }}
		>
			<div
				className="w-full text-3xl md:text-5xl text-center text-white pt-20"
				style={{ fontFamily: 'Gilroy-ExtraBold' }}
			>
				Become a member!
			</div>
			<p className="text-white">For the cost of your Netlfix subscription</p>

			<div className="w-4/5 flex flex-col sm:flex-row justify-center items-center mt-10 sm:space-x-12 space-y-10">
				{pricing &&
					pricing.map((options) => (
					<PricingCards key ={options.key} options={options} />
					))}
			</div>
		</section>
	);
}

Pricing.propTypes = {};

export default Pricing;
