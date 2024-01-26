import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
	return (
		<div className="mt-24">
			<div className="flex flex-col items-center">
				<p className="gradient-text text-sm tracking-wider font-semibold uppercase">
					Testimonials
				</p>
				<h3 className="font-semibold text-[28px] md:text-[32px] lg:text-[40px] text-left text-balance font-poppins ">
					What our customer say
				</h3>
			</div>
			<div className="flex flex-col md:flex-row overflow-x-hidden gap-10 -mx-[24px] md:-mx-[72px] lg:-mx-[150px] ">
				<TestimonialCard />
				<TestimonialCard />
				<TestimonialCard />
			</div>
		</div>
	);
};

export default Testimonials;
