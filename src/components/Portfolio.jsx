import { portfolioAlbum } from "../assets";

import StyledButton from "./StyledButton";

const Portfolio = () => {
	return (
		<div className="mt-24">
			<div className="flex flex-col md:flex-row justify-between">
				<div className="flex flex-col items-start mb-10 md:mb-0">
					<p className="gradient-text text-sm tracking-wider font-semibold uppercase ">
						Portfolio
					</p>
					<h3 className="font-semibold text-[28px] md:text-[32px] lg:text-[40px] text-left text-balance font-poppins">
						Some Of Our Best Works
					</h3>
				</div>
				<StyledButton title="Load More" />
			</div>

			<div className="overflow-x-auto grid grid-flow-col md:grid-flow-row md:grid-cols-9 gap-4 mt-12">
				{portfolioAlbum.map((item, index) => (
					<div
						key={item.id}
						className={`${
							index === 0 || index === 5 || index === 6
								? "col-span-4"
								: index === 1 || index === 4 || index === 7
								? "col-span-3"
								: index === 2 || index === 3 || index === 8
								? "col-span-2"
								: ""
						} relative w-max md:w-auto`}
					>
						<img
							src={item.image}
							alt=""
							className="object-cover h-[292px] w-full"
						/>
						{index === 0 && (
							<div className="absolute bottom-5 ml-10 flex flex-col items-start">
								<p className="gradient-text text-sm tracking-wider font-semibold">
									UI Design
								</p>
								<h3 className="text-[#FFD9D9] font-poppins text-[24px] md:text-[40px] font-semibold">
									Greenify Website
								</h3>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
