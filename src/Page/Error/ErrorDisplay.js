import React from 'react';
import PropTypes from 'prop-types';

function ErrorDisplay({ message, resetError }) {
	return <div>{message}</div>;
}

ErrorDisplay.propTypes = {
	message: PropTypes.string.isRequired,
	resetError: PropTypes.func.isRequired,
};

ErrorDisplay.defaultProps = {
	message: '',
};
export default ErrorDisplay;
