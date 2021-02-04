import React from 'react';

import Features from '../../Components/Features/Features';
import Footer from '../../Components/Footer/Footer';
import Hero from '../../Components/Hero/Hero';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Pricing from '../Pricing/Pricing';
// import Teaching from '../Teaching/Teaching';

function Landing(props) {
	return (
		<section className="overflow-x-hidden flex-1 overflow-y-auto items-center justify-center flex-co w-full">
			<Hero />
			<Features />
			<Testimonials />
			{/* <Teaching /> */}
			<Pricing />
			
		</section>
	);
}

export default Landing;
