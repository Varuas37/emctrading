import React from 'react';
import PropTypes from 'prop-types';

function TestimonialCard({ data }) {
	return (
		<div
			className=" overflow-hidden bg-secondarybg text-white shadow rounded-lg m-2"
			style={{ height: '240px' }}
		>
			<span className="mt-10  flex flex-col justify-baseline  items-center">
				<div className="px-4 py-1 sm:px-6 text-lg" style={{ fontFamily: 'Gilroy-ExtraBold' }}>
					{data.username}
				</div>

				<div className="px-4 py-1 text-base sm:px-6" style={{ fontFamily: 'Gilroy-Light' }}>
					{data.review}
				</div>
			</span>
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
