import React from 'react';
import imgGeneral from '../../Assets/Image/generalmember.svg';
import imgProMember from '../../Assets/Image/promember.svg';
import imgDiamondMember from '../../Assets/Image/diamondM.svg';

function Pricing(props) {
	const handleClick = (link) => {
		window.location.href = link;
	};
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
			<p className="text-white">For a cost of your Netlfix subscription</p>

			<div className="w-4/5 flex flex-col sm:flex-row justify-center items-center mt-10 sm:space-x-12 space-y-10">
				{pricing &&
					pricing.map((options) => (
						<div
							className="flex flex-col pb-4 p-10 rounded-xl text-white w-4/5 items-center justify-center "
							style={{
								// height: `${options.height}`,
								backgroundColor: '#183D78',
							}}
						>
							<h1
								className="text-center w-full text-xl sm:text-2xl"
								style={{ fontFamily: 'Gilroy-ExtraBold' }}
							>
								{options.title}
							</h1>
							<img className="mt-2" src={options.image} height="250px" width="150px" draggable="false" />
							<div
								onClick={() => handleClick(options.link)}
								className="p-4 mt-10 rounded-md"
								style={{
									height: 'fit-content',
									backgroundColor: options.color,
									fontFamily: 'Gilroy-ExtraBold',
									cursor: 'pointer',
								}}
							>
								<span className="text-md">{options.price}</span>
							</div>
						</div>
					))}
			</div>
		</section>
	);
}

Pricing.propTypes = {};

export default Pricing;
