import { face } from "../assets";

import StyledButton from "./StyledButton";

const Hero = () => {
	return (
		<div className="flex flex-col-reverse md:flex-row lg:mt-16 md:mt-12">
			<div className="md:w-1/2 flex flex-col md:items-start items-center lg:gap-16 gap-6 -mt-16 sm:-mt-24 md:mt-0">
				<div className="leading-none md:mt-16 z-10">
					<p className="miami xl:text-[170px] md:text-9xl sm:text-8xl text-6xl">
						MIAMI
					</p>
					<p className="walker xl:text-[170px] md:text-9xl sm:text-8xl text-6xl">
						WALKE
						<span className="md:text-white md:absolute">R</span>
					</p>
				</div>

				<div className="">
					<p className="lg:text-xl text-base text-[#666666] leading-8 md:text-left font-light text-balance">
						Award Wining product designer based in Georgia. We create
						user-friendly interfaces for fast-growing startups.
					</p>
				</div>

				<StyledButton title={"Book A Call"} />
			</div>

			<div className="lg:mx-3 md:w-1/2">
				<div>
					<img
						src={face}
						alt="brandface"
						className="object-cover rounded-tr-[50px] rounded-bl-[50px]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
