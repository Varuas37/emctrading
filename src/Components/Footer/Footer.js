import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
	const footerLinks = [
		{
			id: 1,
			name: 'Contact Us',
			link: 'mailto: ethan@stoffcapital.com',
			newTab: false,
		},
		{
			id: 2,
			name: 'Terms and Conditions',
			link: 'https://www.termsandconditionsgenerator.com/live.php?token=fkY8fTojoPC2cmnUnaBhQXZkw2kQTOir',
			newTab: true,
		},
		{
			id: 3,
			name: 'Disclosures',
			link: '/disclosure',
			newTab: false,
		},
	];
	return (
		<footer className="shadow-lg" >
			<div
				className="bg-secondarybg w-full text-white flex flex-col items-center justify-center space-y-4 pt-5   "
				style={{ maxHeight: '150px' }}
			>
				<nav className="space-x-4 pl-4">
					<Link to="/privacy" className="text-sm sm:text-base">
						Privacy Policy
					</Link>
					{footerLinks &&
						footerLinks.map((item) => (
							<a
								className="text-sm sm:text-base"
								href={item.link}
								target={item.newTab ? '_blank' : null}
								rel={item.newTab ? 'noopener noreferrer' : null}
							>
								{item.name}
							</a>
						))}
				</nav>
				<div className="text-white text-sm opacity-40 p-3 text-center w-full">
					Copyright © 2021 Stoff Capital LLC. All rights reserved
				</div>
			</div>
		</footer>
	);
}

export default Footer;
