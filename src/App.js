import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import history from './utils/history';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Page/Landing/Landing';
import ErrorDisplay from './Page/Error/ErrorDisplay';

function App() {
	return (
		<ErrorBoundary
			FallbackComponent={ErrorFallback}
			onError={myErrorHandler}
			onReset={() => {
				// reset the state of your app so the error doesn't happen again
			}}
		>
			<Router history={history}>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Landing} />
				</Switch>
			</Router>
		</ErrorBoundary>
	);
}

export default App;

const myErrorHandler = (error, info) => {
	// Do something with the error
	// E.g. log to an error logging client here
	console.log(error, info);
};
function ErrorFallback({ error, resetErrorBoundary }) {
	return (
		<div role="alert">
			<ErrorDisplay message={error.message} resetError={resetErrorBoundary} />
		</div>
	);
}
