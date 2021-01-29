import React from 'react';
import PropTypes from 'prop-types';

function PricingCards({options}) {
    	const handleClick = (link) => {
		window.location.href = link;
	};
	
	return (
		
			<div
				className="flex flex-col pb-4 p-10 rounded-xl text-white w-full items-center justify-center "
				style={{
					backgroundColor: '#183D78',
				}}
			>
				<h1 className="text-center w-full text-xl sm:text-2xl" style={{ fontFamily: 'Gilroy-ExtraBold' }}>
					{options.title}
				</h1>
				<img className="mt-2" src={options.image} height="200px" width="250px" draggable="false" />
				<div
					onClick={() => handleClick(options.link)}
					className="p-4 mt-10 rounded-md"
					style={{
						maxHeight: '200px',
						maxWidth: '90%',
						backgroundColor: options.color,
						fontFamily: 'Gilroy-ExtraBold',
						cursor: 'pointer',
					}}
				>
					<span className="text-md">{options.price}</span>
				</div>
			</div>
		
	);
}

PricingCards.propTypes = {};

export default PricingCards;
