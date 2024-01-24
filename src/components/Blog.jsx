import { blogs } from "../constants";
import { arrow } from "../assets";

import StyledButton from "./StyledButton";

const Blog = () => {
	return (
		<div
			id="blog"
			className="bg-[#181818] mt-24 pt-16 pb-16 -mx-[24px] px-[24px] md:-mx-[72px] md:px-[72px] lg:-mx-[150px] lg:px-[150px]"
		>
			<div className="flex flex-col md:flex-row justify-between">
				<div className="flex flex-col items-start mb-12 md:mb-0">
					<p className="gradient-text text-sm tracking-wider font-semibold uppercase ">
						Latest Blog
					</p>
					<h3 className="font-semibold text-[28px] md:text-[32px] lg:text-[40px] text-left text-balance font-poppins text-white">
						Check Some of Latest News & Articles
					</h3>
				</div>
				<StyledButton title="Load More" light />
			</div>
			<div className="grid grid-flow-col md:grid-flow-row md:grid-cols-2 gap-10 mt-20 overflow-x-auto">
				{blogs.map((blog, index) => (
					<div
						key={index + blog.category}
						className="text-left relative mb-20 md:mb-44 w-[310px] md:w-auto"
					>
						<div>
							<img
								src={blog.image}
								alt=""
								className="object-cover h-[370px] p-2"
							/>
						</div>
						<div className="absolute bg-[#181818] ml-12 -bottom-14 md:-bottom-44 -right-2 pl-6 pt-4 flex flex-col gap-2">
							<p className="text-[#888888] text-sm">
								{blog.category} | {blog.date}
							</p>
							<h3 className="text-white font-poppins font-semibold text-lg md:text-3xl">
								{blog.title}
							</h3>
							<p className="text-[#aaaaaa] text-[10px] md:text-base font-medium leading-2">
								{blog.content}
							</p>
							<div className="mt-6 flex gap-4 cursor-pointer">
								<p className="text-white tracking-wide uppercase font-bold text-sm md:text-base">
									Read More
								</p>
								<img src={arrow} alt="" />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Blog;
