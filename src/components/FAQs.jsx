import FAQ from "./FAQ";

const FAQs = () => {
	return (
		<div className="bg-[#181818] mt-24 py-20 -mx-[24px] px-[24px] md:-mx-[72px] md:px-[72px] lg:-mx-[150px] lg:px-[150px] flex flex-col-reverse md:flex-row gap-20">
			<div className="md:w-1/2 flex flex-col gap-6">
				<FAQ question="How can we help your business?" />
				<FAQ question="What are the advantages of Bisnext" />
				<FAQ question="Let`s find an office near you?" />
				<FAQ question="How IT consultancy experts work?" />
			</div>
			<div className="md:w-1/2 flex flex-col gap-6 items-start">
				<p className="gradient-text text-sm tracking-wider font-semibold uppercase">
					FAQs
				</p>
				<h3 className="font-semibold text-white text-[28px] md:text-[32px] lg:text-[40px] text-left text-balance font-poppins ">
					Be Kind to Your Mind Question & Answer
				</h3>
				<p className="font-medium text-base text-[#aaaaaa] text-left">
					All Your Questions are in A document, in question and answer format,
					that introduces newcomers to a topic or answers common questions.
				</p>
			</div>
		</div>
	);
};

export default FAQs;
