import React from 'react';
import PropTypes from 'prop-types';

function TestimonialCard({ data }) {
	return (
		<div
			className=" overflow-hidden bg-secondarybg text-white shadow rounded-lg m-2 flex flex-col justify-center items-center"
			style={{ height: '240px' }}
		>
			<div className="px-4 py-1 sm:px-6 text-md" style={{ fontFamily: 'Gilroy-ExtraBold' }}>
				{data.username}
			</div>

			<div className="px-4 py-1 sm:px-6" style={{ fontFamily: 'Gilroy-Light' }}>
				{data.review}
			</div>
		</div>
	);
}

TestimonialCard.propTypes = {
	data: PropTypes.object.isRequired,
};
TestimonialCard.defaultProps = {
	data: [{ username: 'Jeff Bezos', review: 'How Do you think I became a billionaire' }],
};

export default TestimonialCard;
