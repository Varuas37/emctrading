import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
function MobileNavbar({ close, navLink }) {
	return (
		<div class="md:hidden flex flex-col flex-grow border-gray-200 pt-5 pb-4 bg-primarybg overflow-y-auto">
			<div class="mt-5 flex-grow flex flex-col">
				<nav class="cursor-pointer flex-1 px-2 bg-primarybg space-y-1" aria-label="Sidebar">
					{navLink &&
						navLink.map((item) => (
							<Link to={item.link} replace>
								<ScrollLink
									onClick={() => close(false)}
									to="hero"
									spy={true}
									smooth={true}
									offset={-200}
									duration={0}
									class="bg-primarybg text-white group flex items-center px-2 py-2 text-sm font-mediumrounded-md"
								>
									{item.svg}
									{item.name}
								</ScrollLink>
							</Link>
						))}

					{/* <Link
						onClick={() => close(false)}
						to="hero"
						spy={true}
						smooth={true}
						offset={-200}
						duration={0}
						class="bg-primarybg text-white group flex items-center px-2 py-2 text-sm font-mediumrounded-md"
					>
						
						Home
					</Link>
					<Link
						onClick={() => close(false)}
						to="features"
						spy={true}
						smooth={true}
						offset={-200}
						duration={0}
						class="bg-primarybg text-white group flex items-center px-2 py-2 text-sm font-mediumrounded-md"
					>
						
						Features
					</Link>
					<Link
						onClick={() => close(false)}
						to="reviews"
						spy={true}
						smooth={true}
						offset={-200}
						duration={0}
						class="bg-primarybg text-white group flex items-center px-2 py-2 text-sm font-mediumrounded-md"
					>
						
						Testimonials
					</Link>
					<Link
						onClick={() => close(false)}
						to="pricing"
						spy={true}
						smooth={true}
						offset={-200}
						duration={0}
						class="bg-primarybg text-white group flex items-center px-2 py-2 text-sm font-mediumrounded-md"
					>
						
						Pricing
					</Link> */}
				</nav>
			</div>
		</div>
	);
}

MobileNavbar.propTypes = {};

export default MobileNavbar;
