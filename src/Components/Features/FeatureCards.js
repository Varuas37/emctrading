import React from 'react';
import PropTypes from 'prop-types';

function FeatureCards({ feature }) {
	return (
		<div
			className=" overflow-hidden bg-secondarybg text-white shadow rounded-lg"
			style={{ height: '250px', minHeight: 'fit-content' }}
		>
			<span className="mt-5  flex flex-col justify-start  items-center">
				<div className="px-4 py-1 sm:px-6 text-lg" style={{ fontFamily: 'Gilroy-ExtraBold' }}>
					{feature.title}
				</div>

				<img
					src={feature.image}
					height="75px"
					width="75px"
					style={{ borderRadius: '50%' }}
					className="rounded-full p-2 bg-primarybg mt-2 "
				></img>

				<div className="px-4 py-1 sm:px-6 mt-2" style={{ fontFamily: 'Gilroy-Light' }}>
					{feature.detail}
				</div>
			</span>
		</div>
	);
}

FeatureCards.propTypes = {
	feature: PropTypes.object.isRequired,
};

FeatureCards.defaultProps = {
	feature: [{ id: 1, detail: 'Failed to Load Cards', title: 'Error' }],
};
export default FeatureCards;
