import React from 'react';
import { Link } from 'react-router-dom';
import imgStockTeach from '../../Assets/Image/stockTeach.png';
// import PropTypes from 'prop-types';

function Teaching(props) {
	const discordLink = 'https://discord.gg/BZXJBb2r';
	const handleClick = () => {
		window.location.href = discordLink;
	};
	return (
		<section className="w-full h-4/5 md:h-3/5 text-secondarybg max-w-7xl mx-auto mt-7 mb-40 sm:mb-0 sm:px-6 lg:px-8 justify-center items-center">
			<div className="text-3xl md:text-5xl text-center" style={{ fontFamily: 'Gilroy-ExtraBold' }}>
				Stocks Made Easy
			</div>
			<div className="flex flex-col sm:flex-row p-2 sm:p-0 justify-between items-center">
				<div>
					<p>
						Getting started with stock market can be challenging. Not all of us have time to research and
						read about the next big stock or what is going on in stock market. Our dedicted staffs will not
						only inform you about the current market but we also have daily classes where we teach you the
						fundamentals of stocks and explain you why we made the calls we did. We have free sessions once
						a week, join our discord to get started
					</p>
					<div
						onClick={handleClick}
						className="hidden md:block z-10 text-lg font-bold bg-primarybg text-white rounded shadow-lg p-3 mt-10 pl-8 pr-8  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent hover:bg-secondarybg-700 "
						style={{ maxWidth: '170px' }}
					>
						Join Free Sessions
					</div>
				</div>
				<img draggable="false" src={imgStockTeach} width="630px" height="512px" />
				<div
					onClick={handleClick}
					className="md:hidden block z-10 text-lg font-bold bg-primarybg text-white rounded shadow-lg p-3 mt-10 pl-8 pr-8  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent hover:bg-secondarybg-700 "
					style={{ maxWidth: '170px' }}
				>
					Join
				</div>
			</div>
		</section>
	);
}

// Teaching.propTypes = {};

export default Teaching;
