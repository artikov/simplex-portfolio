import { features } from "../constants";

import StyledButton from "./StyledButton";

const Features = () => {
	return (
		<div className="flex flex-col md:flex-row mt-28">
			<div className="md:w-1/2 flex flex-col md:gap-12 gap-6">
				<div className="flex flex-col items-start">
					<div className="gradient-text text-sm tracking-wider font-semibold uppercase ">
						Features
					</div>
					<h3 className="font-semibold text-[28px] md:text-[32px] lg:text-[40px] text-left text-balance font-poppins">
						Giving Your Business Some Great Ideas
					</h3>
				</div>

				<p className="text-base font-medium text-[#AAAAAA] text-justify md:mr-20">
					Every designer needs the right tools to do the perfect job.
					Thankfully, we can do that. I design products that are more than
					pretty. I make them shippable and usable.
				</p>

				<StyledButton title="Contact US" />
			</div>
			<div className="md:w-1/2 mt-12 md:mt-0 grid md:grid-cols-2 gap-12 md:gap-6">
				{features.map((feature, index) => (
					<div
						className={`flex flex-col text-left px-0 gap-4 ${
							index % 2 == 0 ? "md:pt-16" : "md:pt-0"
						} `}
						key={feature.title}
					>
						<img src={feature.image} alt="" className="object-cover" />

						<div>
							<h3 className="font-poppins text-2xl font-semibold">
								{feature.title}
							</h3>
							<p className="font-medium text-base text-[#aaaaaa] mt-4">
								{feature.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Features;
