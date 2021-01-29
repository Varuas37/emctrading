import React from 'react';
import PropTypes from 'prop-types';

function FeatureCards({ feature }) {
	return (
		<div className=" overflow-hidden bg-secondarybg text-white shadow rounded-lg flex flex-col justify-center items-center" style={{height:"240px"}}>
			<div className="px-4 py-1 sm:px-6 text-md" style={{ fontFamily: 'Gilroy-ExtraBold' }}>
				{feature.title}
			</div>
			<div
				className={`px-4 py-1 sm:p-6 rounded-full h-16 w-16 bg-${feature.bg} text-black flex items-center justify-center`}
			>
				<span className="text-white">{feature.image}</span>
			</div>
			<div className="px-4 py-1 sm:px-6" style={{ fontFamily: 'Gilroy-Light' }}>
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
