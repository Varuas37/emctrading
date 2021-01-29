import React from 'react';
import svgLine from '../../Assets/svg/lines.svg';
import svgAreaChart from '../../Assets/svg/areachart.svg';
import svgMainChart from '../../Assets/svg/mainGraph.svg';
function Hero() {
	const images = [
		{
			id: 1,
			name: svgLine,
			opacity: 10,
		},
		{
			id: 2,
			name: svgAreaChart,
			opacity: 5,
		},
		{
			id: 3,
			name: svgMainChart,
			opacity: 10,
		},
	];
	const handleClick = () => {
		window.location.href = 'https://upgrade.chat/shop/455927928618745869';
	};
	return (
		<div
			className="relative w-full h-4/5 md:h-screen bg-primarybg text-white flex justify-start items-center flex-col"
			id="hero"
		>
			<div className="w-full flex flex-center flex-col items-center justify-center m-40">
				<h1 className="text-4xl md:text-7xl text-center	" style={{ fontFamily: 'Gilroy-ExtraBold' }}>
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
							className={`absolute w-full opacity-${image.opacity}`}
							alt="background image line"
							style={{ bottom: 0 }}
						></img>
					))}
			</div>
		</div>
	);
}

export default Hero;
