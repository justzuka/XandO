import { useGlobalContext } from "./context";
import Xsvg from "./Xsvg";
import Osvg from "./Osvg";
import { useEffect } from "react";
const GameEndScreen = () => {
	const { isXWinner, NextRound, isTie } = useGlobalContext();

	return (
		<div className="absolute w-screen h-screen items-center flex">
			<div className="z-[5] absolute w-[100%] h-[100%] bg-btnShadowColor/[.2]"></div>
			<div
				className="z-[6] w-[100%] h-[150px] my-auto bg-btnColor flex 
            items-center flex-col"
			>
				<div className="my-auto flex items-center">
					{isTie ? (
						""
					) : isXWinner ? (
						<Xsvg
							mainStyle="w-[40px] h-[40px] mx-4"
							rectStyle="fill-xColor"
						></Xsvg>
					) : (
						<Osvg
							mainStyle="w-[40px] h-[40px] mx-4 "
							circleStyle="stroke-oColor"
						></Osvg>
					)}

					<div
						className={`mx-auto  
                    font-[500] text-[30px]
                    ${
											isTie
												? "text-greyColor"
												: isXWinner
												? "text-xColor"
												: "text-oColor"
										}`}
					>
						{isTie ? "TIE" : "TAKES THE ROUND"}
					</div>
				</div>
				<button
					onClick={NextRound}
					className="h-[30px] bg-btnYellow shadow-btn3 px-1 
                shadow-btnYellow/[.7] mb-6 text-bgColor font-[700] 
                text-justify text-[15px] rounded"
				>
					Next Round
				</button>
			</div>
		</div>
	);
};

export default GameEndScreen;
