import { useEffect, useState } from "react";
import Xsvg from "./Xsvg";
import Osvg from "./Osvg";
import { useGlobalContext } from "./context";
const Button = ({ id }) => {
	const { buttons, ButtonClick } = useGlobalContext();
	const { isX, isO, colorState } = buttons[id];

	return (
		<button
			onClick={() => ButtonClick({ id })}
			key={id}
			className={`w-[70px] h-[70px] 
                shadow-btn5 bg-btnColor mx-auto
                my-2 flex items-center justify-center 
                rounded 
				transition-all
				${colorState == 0 && "bg-btnColor"}
				${colorState == 1 && "bg-xColor"}
				${colorState == 2 && "bg-oColor"}
				${colorState == 3 && "bg-greyColor"}
				${isX == false && isO == false ? "" : "cursor-default"}`}
		>
			{/* {isX && (
				<Xsvg mainStyle="w-[40px] h-[40px]" rectStyle="fill-xColor"></Xsvg>
			)} */}
			<Xsvg
				mainStyle={`${isX ? "w-[40px] h-[40px]" : "w-[0px] h-[0px]"} 
				transition-all
				`}
				rectStyle={`
				${colorState == 1 || colorState == 3 ? "fill-btnColor" : "fill-xColor"} 
				 transition-all`}
			></Xsvg>

			<Osvg
				mainStyle={`${isO ? "w-[40px] h-[40px]" : "w-[0px] h-[0px]"} 
				transition-all `}
				circleStyle={`${
					colorState == 2 || colorState == 3
						? "stroke-btnColor"
						: "stroke-oColor"
				} 
				
				 transition-all`}
			></Osvg>
		</button>
	);
};
export default Button;
