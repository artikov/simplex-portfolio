import PropTypes from "prop-types";

const StyledButton = ({ title, light }) => {
	return (
		<div className="w-[172px] h-[67px] relative ">
			<div className="absolute cursor-pointer w-[157px] h-[58px] top-[9px] left-[15px] [background:linear-gradient(90deg,#4B34E4,#EE346B)]" />
			<div
				className={`absolute cursor-pointer flex items-center w-[161px] h-[58px] px-[30px] ${
					light ? "bg-white" : "bg-black"
				}`}
			>
				<div className={`font-mediumtext-lg ${!light && "text-white"}`}>
					{title}
				</div>
			</div>
		</div>
	);
};

StyledButton.propTypes = {
	title: PropTypes.string.isRequired,
	light: PropTypes.bool,
};

export default StyledButton;
