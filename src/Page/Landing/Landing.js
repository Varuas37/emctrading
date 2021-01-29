import React from 'react';

import Features from '../../Components/Features/Features';
import Hero from '../../Components/Hero/Hero';
import Navbar from '../../Components/Navbar/Navbar';
import Testimonials from '../../Components/Testimonials/Testimonials';

function Landing(props) {
	return (
		<section className="flex-1 overflow-y-auto items-center justify-center flex-col h-screen w-full">
			<Hero />
			<Features />
			<Testimonials />
		</section>
	);
}

export default Landing;
