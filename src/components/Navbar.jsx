import { useState } from "react";

import { logo, menu, close } from "../assets";

import { navLinks } from "../constants";

import StyledButton from "./StyledButton";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="w-full flex py-6 justify-between items-center h-[100px]">
			<img src={logo} alt="logo" className="w-[72px] h-[52px]" />

			<ul className="md:flex hidden justify-end items-center">
				{navLinks.map((nav) =>
					nav.id == "contact" ? (
						<StyledButton key={nav.id} id={nav.id} title={nav.title} />
					) : (
						<li key={nav.id} className={`cursor-pointer text-lg mr-9`}>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					)
				)}
			</ul>

			<div className="md:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[32px] h-[32px] object-contain"
					onClick={() => setToggle((prev) => !prev)}
				/>
				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 border absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-white`}
				>
					<ul className="list-none flex flex-col justify-end items-center flex-1">
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={` font-normal cursor-pointer text-[16px] ${
									index === navLinks.length - 1 ? "mr-0" : "mb-4"
								}`}
							>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
