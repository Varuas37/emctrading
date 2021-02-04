import React from 'react';
import PropTypes from 'prop-types';

function Disclosure(props) {
	return (
		<div className="md:h-screen flex flex-col justify-start mt-10 mb-10  items-center">
			<div className="w-4/5 ">
				<h1 className="font-bold text-2xl">Disclosure</h1>
				<p>The user has read and understand the agreement below and agree to its terms:</p>

				<p>1) By joining this server Stoff Capital, you agree that you are 18 years of age or older.</p>

				<p>
					2) By joining Stoff Capital, you agree that you are fully responsible and liable for ALL of your
					actions within the group. Whether it is regarding profits or loss on the guides and information you
					see in the server, we are not held accountable for any of it.{' '}
				</p>

				<p>
					3) Stoff Capital does not accept any liability, loss, or harm that may occur from the information
					provided in this group.
				</p>

				<p>
					4) Stoff Capital is not a financial institution and the information provided within the group is not
					to be taken as financial advice. Should you require financial advice, we highly recommend seeking
					out a licensed financial professional.
				</p>

				<p>
					5) We encourage users to do their own due diligence and consult with a licensed financial
					professional prior to acting to any trades. The ideas/information posted in this group are solely
					for informational purposes.
				</p>

				<p>
					6) Options Trading is very risky and does not guarantee any sort of income, or trading results. By
					continuing to join/stay in this group you, the user are aware and agree to all of the terms and
					conditions listed above.
				</p>
			</div>
		</div>
	);
}

Disclosure.propTypes = {};

export default Disclosure;
