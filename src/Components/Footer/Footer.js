import React from 'react';

function Footer() {
	const footerLinks = [
		{
			id: 1,
			name: 'Contact Us',
			link: '/contact',
		},
		{
			id: 2,
			name: 'FAQ',
			link: '/faq',
		},
		{
			id: 3,
			name: 'Reviews',
			link: '#reviews',
		},
		{
			id: 4,
			name: 'Terms and Conditions',
			link: '/terms-and-conditions',
		},
		{
			id: 5,
			name: 'Disclosures',
			link: '/disclosures',
		},
	];
	return (
		<footer>
			<div
				className="bg-secondarybg w-full text-white flex flex-col items-center justify-center space-y-4 pt-5"
				style={{ maxHeight: '150px' }}
			>
				<nav className="space-x-4 pl-4">
					{footerLinks &&
						footerLinks.map((item) => (
							<a className="text-sm sm:text-base" href={item.link}>
								{item.name}
							</a>
						))}
				</nav>
				<div className="text-white text-sm opacity-40 p-3 text-center w-full">
					Copyright 2021 EMC Trading LLC. All rights reserved
				</div>
			</div>
		</footer>
	);
}

export default Footer;
