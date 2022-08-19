import { useEffect, useState } from "react";
import Xsvg from "./Xsvg";
import Osvg from "./Osvg";
import { useGlobalContext } from "./context";
const Button = ({ id }) => {
	const [isFree, setIsFree] = useState(true);
	const { buttons, ButtonClick } = useGlobalContext();
	const { isX, isO } = buttons[id];
	useEffect(() => {
		if (isX === true || isO === true) {
			setIsFree(false);
		}
	}, [isX, isO, id]);

	return (
		<button
			onClick={() => ButtonClick({ id })}
			key={id}
			className={`w-[70px] h-[70px] 
                shadow-btn5 bg-btnColor mx-auto
                my-2 flex items-center justify-center 
                rounded ${isFree ? "" : "cursor-default"}`}
		>
			{isX && (
				<Xsvg mainStyle="w-[40px] h-[40px]" rectStyle="fill-xColor"></Xsvg>
			)}
			{isO && (
				<Osvg mainStyle="w-[40px] h-[40px] " circleStyle="stroke-oColor"></Osvg>
			)}
		</button>
	);
};
export default Button;
