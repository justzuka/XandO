const Xsvg = ({ mainStyle, rectStyle }) => {
	return (
		<svg
			width="100"
			height="100"
			viewBox="0 0 100 100"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={mainStyle}
		>
			<rect
				y="30.2405"
				width="42.7665"
				height="53.8541"
				rx="7"
				transform="rotate(-45 0 30.2405)"
				className={rectStyle}
			/>
			<rect
				x="14.1658"
				y="44.4062"
				width="42.7665"
				height="78.6213"
				rx="7"
				transform="rotate(-45 14.1658 44.4062)"
				className={rectStyle}
			/>
			<rect
				x="69.7595"
				width="42.7665"
				height="53.8541"
				rx="7"
				transform="rotate(45 69.7595 0)"
				className={rectStyle}
			/>
			<rect
				x="55.5936"
				y="14.1658"
				width="42.7665"
				height="78.6213"
				rx="7"
				transform="rotate(45 55.5936 14.1658)"
				className={rectStyle}
			/>
		</svg>
	);
};

export default Xsvg;
