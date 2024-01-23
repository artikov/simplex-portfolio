import { face } from "../assets";

import StyledButton from "./StyledButton";

const Hero = () => {
	return (
		<div className="flex mt-16">
			<div className="w-1/2 flex flex-col items-start gap-16">
				<div className="leading-none mt-16">
					<p className="miami">MIAMI</p>
					<p className="walker">
						WALKE
						<span className="text-white absolute">R</span>
					</p>
				</div>

				<p className="text-xl text-[#666666] leading-8 text-left font-light">
					Award Wining product designer based in Georgia. We create
					user-friendly interfaces for fast-growing startups.
				</p>

				<StyledButton title={"Book A Call"} />
			</div>

			<div className="mx-3">
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
