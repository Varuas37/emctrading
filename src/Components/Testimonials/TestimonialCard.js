import React from 'react';
import PropTypes from 'prop-types';

function TestimonialCard({testimonial}) {
	return (
		<div
			className=" overflow-hidden bg-secondarybg text-white shadow rounded-lg m-2 flex flex-col justify-center items-center"
			style={{ height: '240px' }}
		>
			<div className="px-4 py-1 sm:px-6 text-md" style={{ fontFamily: 'Gilroy-ExtraBold' }}>
				{testimonial.username}
			</div>
			
			<div className="px-4 py-1 sm:px-6" style={{ fontFamily: 'Gilroy-Light' }}>
				{testimonial.review}
			</div>
		</div>
	);
}

TestimonialCard.propTypes = {};

export default TestimonialCard;
