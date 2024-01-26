import { client, quoteup, star } from "../assets";

const TestimonialCard = () => {
	return (
		<div className="flex flex-col md:min-w-[545px] gap-10 p-6 shadow-[0px_4px_100px_#afadb51a]">
			<div>
				<img
					className=" w-[40px] h-[40px] top-[27px] left-[25px]"
					alt="Vuesax bold quote up"
					src={quoteup}
				/>
			</div>

			<div>
				<p className="font-poppins text-[#090D23] text-[18px] leading-[32.4px]">
					“Now, i can track my business activity with easier and have a great
					understandable to operate the products
				</p>
			</div>

			<div className="flex justify-between">
				<div className="flex gap-4 items-center ">
					<img
						className="w-[50px] h-[50px] object-cover rounded-full"
						alt="Ellipse"
						src={client}
					/>
					<div className="font-poppins font-medium text-[20px]">
						Janne Cooper
					</div>
				</div>
				<div className="gap-3 inline-flex items-center justify-center">
					<img className="w-[24px] h-[24px]" alt="Star" src={star} />
					<div className="font-poppins font-semibold text-[18px]">4.3</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
