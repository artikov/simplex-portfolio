import { arrow, logo } from "../assets";

const Contact = () => {
	return (
		<div id="contact" className="mt-24 flex flex-col items-center gap-10">
			<div className="flex flex-col items-center">
				<p className="gradient-text text-sm tracking-wider font-semibold uppercase">
					Have you project in mind?
				</p>
				<h3 className="font-semibold text-[28px] md:text-[32px] lg:text-[40px] text-balance font-poppins">
					Let’s Make Something
					<br />
					Great Together!
				</h3>
			</div>
			<div className="w-[143px] md:w-[250px] h-[143px] md:h-[250px] [background:linear-gradient(180deg,#6737D3,#D73780)] rounded-full flex flex-col items-center justify-center gap-4 cursor-pointer">
				<p className="uppercase text-[12px] md:text-base font-bold text-white tracking-wider mt-8">
					Contact with us
				</p>
				<img src={arrow} alt="" />
			</div>
			<div className="mt-14">
				<img src={logo} alt="" className="w-[72px] h-[72px]" />
			</div>
		</div>
	);
};

export default Contact;
