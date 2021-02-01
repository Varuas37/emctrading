import React from 'react';
import PropTypes from 'prop-types';

function FeatureCards({ feature }) {
	return (
		<div
			className=" overflow-hidden bg-secondarybg text-white shadow rounded-lg flex flex-col justify-center items-center"
			style={{ height: '240px' }}
		>
			<div className="px-4 py-1 sm:px-6 text-md" style={{ fontFamily: 'Gilroy-ExtraBold' }}>
				{feature.title}
			</div>
		
			<img src={feature.image} height="80px" width="80px" className="rounded-full p-2 bg-primarybg mt-2"></img>
			
			<div className="px-4 py-1 sm:px-6 mt-2" style={{ fontFamily: 'Gilroy-Light' }}>
				{feature.detail}
			</div>
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
