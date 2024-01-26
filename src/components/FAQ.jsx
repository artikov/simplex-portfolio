import PropTypes from "prop-types";

import { arrowDown } from "../assets";

const FAQ = ({ question }) => {
	return (
		<div
			id="faq"
			className="bg-[#222222] text-white flex justify-between items-center p-4 cursor-pointer"
		>
			<p className="font-semibold md:text-xl text-[12px]">{question}</p>
			<img src={arrowDown} alt="" />
		</div>
	);
};

FAQ.propTypes = {
	question: PropTypes.string.isRequired,
};

export default FAQ;
