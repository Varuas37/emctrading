import React from 'react';
import svgLine from '../../Assets/svg/lines.svg';
import svgAreaChart from '../../Assets/svg/areachart.svg';
import svgMainChart from '../../Assets/svg/mainGraph.svg';
function Hero() {
	const images = [
		{
			id: 1,
			name: svgLine,
		},
		{
			id: 2,
			name: svgAreaChart,
		},
		{
			id: 3,
			name: svgMainChart,
		},
	];
	return (
		<div className="h-screen w-full bg-primarybg text-white flex justify-start items-center flex-col" id="hero">
			<div className="flex flex-center flex-col items-center justify-center m-40">
				<h1 className="text-4xl md:text-7xl text-center	" style={{ fontFamily: 'Gilroy-ExtraBold' }}>
					Investing Advice For{' '}
					<p>
						Everyday <span className="text-accent">Traders</span>
					</p>
				</h1>
				<button
					className="z-10 text-lg font-bold bg-discord rounded shadow-lg p-4 m-10 pl-8 pr-8  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent hover:bg-secondarybg-700 "
					style={{ width: '240px' }}
				>
					Purchase
				</button>
			</div>
			<div
				className="z-0 flex flex-col w-full absolute"
				style={{ bottom: 0, backgroundImage: { svgMainChart } }}
			>
				{images &&
					images.map((image) => (
						<img
							draggable="false"
							src={image.name}
							className="absolute w-full opacity-10"
							alt="background image line"
							style={{ bottom: 0 }}
						></img>
					))}
			</div>
		</div>
	);
}

export default Hero;
