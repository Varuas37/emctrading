import React, { useState } from 'react';
import imgDiscordLogo from '../../Assets/Image/discord-logo.png';
import MobileNavbar from './MobileNavbar';
import { Link } from 'react-scroll';
import { discordLink } from '../../config/links';
function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false);

	const navlinks = [
		{
			key: 1,
			name: 'Features',
			link: 'features',
		},
		{
			key: 2,
			name: 'Testimonials',
			link: 'reviews',
		},
		{
			key: 3,
			name: 'Pricing',
			link: 'pricing',
		},
	];
	const takeHome = () => {
		window.location.href = '/';
	};
	return (
		<header>
			<div className="bg-primarybg text-white w-full h-16 flex flex-row p-10 items-center justify-between">
				<div className="flex flex-row space-x-2 item-center justify-center cursor-pointer" onClick={takeHome}>
					<svg
						className=" w-8 h-8"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						{' '}
						<path
							fill-rule="evenodd"
							d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
							clip-rule="evenodd"
						></path>
					</svg>
					<h1 className="font-md lg:inline hidden" style={{ fontFamily: 'Rufina-Bold', fontSize: '24px' }}>
						Stoff Capital
					</h1>
				</div>
				<div
					className="hidden md:flex flex-row space-x-2  sm:space-x-6 items-center justify-around"
					id="NavLinks"
				>
					<nav
						className="flex flex-row text-white space-x-2 sm:space-x-4"
						style={{ fontFamily: 'Gilroy-ExtraBold' }}
					>
						<a
							class="bg-primarybg block text-white group flex items-center px-2 py-2 text-sm font-mediumrounded-md"
							style={{ fontSize: 22, cursor: 'pointer' }}
							onClick={takeHome}
						>
							Home
						</a>

						{navlinks.map((item) => (
							<Link
								onClick={() => setToggleMenu(!toggleMenu)}
								to={item.link}
								spy={true}
								smooth={true}
								offset={0}
								duration={200}
								class="bg-primarybg block text-white group flex items-center px-2 py-2 text-sm font-mediumrounded-md"
								style={{ fontSize: 22, cursor: 'pointer' }}
							>
								{item.name}
							</Link>
						))}
					</nav>
					<a
						href={discordLink}
						className="hidden sm:inline rounded-md shadow  flex items-center cursor-pointer"
					>
						<img src={imgDiscordLogo} height="30" width="120"></img>
					</a>
				</div>
				<div
					className="md:hidden flex relative cursor-pointer flex-col space-y-4"
					onClick={() => setToggleMenu(!toggleMenu)}
				>
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						></path>
					</svg>
				</div>
			</div>
			{toggleMenu ? <MobileNavbar close={setToggleMenu} /> : null}
		</header>
	);
}

export default Navbar;
