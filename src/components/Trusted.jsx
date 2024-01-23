import { trustedCompanies } from "../assets";

const Trusted = () => {
	return (
		<div className="lg:mt-32 mt-16">
			<p className="text-[#12141D]">Trusted By</p>

			<div className="flex flex-wrap sm:justify-between justify-center mt-6">
				{trustedCompanies.map((company) => (
					<div
						key={company.id}
						className="flex items-center justify-center  w-[170px] h-[100px]"
					>
						<img src={company.image} alt="company" />
					</div>
				))}
			</div>
		</div>
	);
};

export default Trusted;
