import { trustedCompanies } from "../assets";

const Trusted = () => {
	return (
		<div className="mt-32">
			<p className="text-[#12141D]">Trusted By</p>

			<div className="flex flex-wrap justify-between mt-6">
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
