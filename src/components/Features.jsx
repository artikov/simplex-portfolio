import { features } from "../constants";

import StyledButton from "./StyledButton";

const Features = () => {
	return (
		<div className="flex mt-28">
			<div className="w-1/2 flex flex-col gap-12">
				<div>
					<p className="gradient-text text-sm tracking-wider font-semibold uppercase text-left">
						Features
					</p>
					<h3 className="font-semibold text-[40px] text-left text-balance font-poppins">
						Giving Your Business Some Great Ideas
					</h3>
				</div>

				<p className="text-base font-medium text-[#AAAAAA] text-justify mr-20">
					Every designer needs the right tools to do the perfect job.
					Thankfully, we can do that. I design products that are more than
					pretty. I make them shippable and usable.
				</p>

				<StyledButton title="Contact US" />
			</div>
			<div className="w-1/2">
				<div className="grid grid-cols-2 styled-col">
					{features.map((feature, index) => (
						<div
							className={`flex flex-col text-left px-4 gap-4 ${
								index % 2 == 0 ? "pt-16" : "pt-0"
							} `}
							key={feature.title}
						>
							<div>
								<img src={feature.image} alt="" />
							</div>
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
		</div>
	);
};

export default Features;
