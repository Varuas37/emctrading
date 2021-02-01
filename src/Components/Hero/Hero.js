import React from 'react';
import svgLine from '../../Assets/svg/lines.svg';
import svgAreaChart from '../../Assets/svg/areachart.svg';
import svgMainChart from '../../Assets/svg/mainGraph.svg';
function Hero() {
	const images = [
		{
			id: 1,
			name: svgLine,
			opacity: 0.1,
		},
		{
			id: 2,
			name: svgAreaChart,
			opacity: 0.5,
		},
		{
			id: 3,
			name: svgMainChart,
			opacity: 0.1,
		},
	];
	const shopLink = 'https://upgrade.chat/shop/455927928618745869';
	const handleClick = () => {
		window.location.href = shopLink;
	};
	return (
		<div
			className="relative w-full h-screen sm:h-screen bg-primarybg text-white flex justify-start items-center flex-col"
			id="hero"
		>
			<div className="w-full flex flex-center flex-col items-center justify-center mt-40">
				<h1
					className="xs:text-3xl text-4xl md:text-6xl lg:text-7xl text-center	"
					style={{ fontFamily: 'Gilroy-ExtraBold' }}
				>
					Investing Advice For{' '}
					<p>
						Everyday <span className="text-accent">Traders</span>
					</p>
				</h1>
				<button
					onClick={handleClick}
					className="z-10 text-lg font-bold bg-discord rounded shadow-lg p-4 m-10 pl-8 pr-8  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent hover:bg-secondarybg-700 "
					style={{ width: '240px' }}
				>
					Purchase
				</button>
			</div>
			<div className="z-0 flex flex-col w-full absolute" style={{ bottom: 0, backgroundImage: { svgMainChart } }}>
				{images &&
					images.map((image) => (
						<img
							key={image.id}
							draggable="false"
							src={image.name}
							className={`absolute w-full `}
							alt="background image line"
							style={{ bottom: 0, opacity: image.opacity }}
						></img>
					))}
			</div>
			<svg
				class="animate-bounce w-8 h-8 absolute sm:hidden inline"
				fill="white"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				style={{ bottom: '20%' }}
			>
				<path
					fill-rule="evenodd"
					d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
					clip-rule="evenodd"
				></path>
			</svg>
		</div>
	);
}

export default Hero;
