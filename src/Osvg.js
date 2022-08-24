const Osvg = ({ mainStyle, circleStyle }) => {
	return (
		<svg
			viewBox="0 0 100 100"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={mainStyle}
		>
			<circle
				className={circleStyle}
				cx="50"
				cy="50"
				r="35.5"
				stroke="#D9D9D9"
				strokeWidth="29"
			/>
		</svg>
	);
};

export default Osvg;
