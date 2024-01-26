import { facebook, instagram, linkedin, be, social } from "../assets";

const Footer = () => {
	return (
		<div className="mt-24 mb-10">
			<div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-32 mb-12">
				<img src={facebook} alt="" />
				<img src={linkedin} alt="" />
				<img src={instagram} alt="" />
				<img src={be} alt="" />
				<img src={social} alt="" />
			</div>
			<hr className="bg-[#4444444] hidden md:flex my-14 -mx-[24px] md:-mx-[72px] lg:-mx-[150px] border-2" />
			<div className="flex flex-col-reverse md:flex-row justify-between">
				<p className="text-[#acacac] md:text-lg">
					© 2023 Artikov. All Rights Reserved
				</p>
				<hr className="bg-[#4444444] md:hidden my-6 -mx-[24px] md:-mx-[72px] lg:-mx-[150px] border-2" />
				<p className="text-[#acacac] md:text-lg">
					Privacy Policy | Terms and Conditions
				</p>
			</div>
		</div>
	);
};

export default Footer;
