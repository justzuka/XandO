import Xsvg from "./Xsvg";
import Osvg from "./Osvg";
import { IoReloadSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
import Buttons from "./Buttons";
import GameEndScreen from "./GameEndScreen";
import TraPanel from "./TraPanel";
import Scores from "./Scores";
function App() {
	const { isXTurn, isGameOver, blockButtons, Restart } = useGlobalContext();
	return (
		<div className="w-screen h-screen">
			{blockButtons && <TraPanel />}
			{isGameOver && <GameEndScreen></GameEndScreen>}
			<div className="w-screen h-screen bg-bgColor flex items-center">
				<div className="mx-auto w-[280px] bg- rounded flex-col">
					<div className="mx-auto px-2 my-1 flex justify-between items-center">
						<div className="flex flex-row">
							<Xsvg
								mainStyle="w-[20px] h-[20px] ml-1"
								rectStyle="fill-xColor"
							></Xsvg>
							<Osvg
								mainStyle="w-[20px] h-[20px] ml-1"
								circleStyle="stroke-oColor"
							></Osvg>
						</div>
						<div
							className="h-[20px] flex items-center
            				 bg-btnColor rounded px-1 py-4  mr-2
             					shadow-btn3 "
						>
							{isXTurn ? (
								<Xsvg
									mainStyle="w-[15px] m-1 mx-2 h-[15px]"
									rectStyle="fill-xColor"
								></Xsvg>
							) : (
								<Osvg
									mainStyle="w-[15px] m-1 mx-2 h-[15px]"
									circleStyle="stroke-oColor"
								></Osvg>
							)}
							<p
								className={`${isXTurn ? "text-xColor" : "text-oColor"} 
							font-[500] text-[15px] mr-1
							transition-all`}
							>
								TURN
							</p>
						</div>
						<button
							onClick={Restart}
							className="bg-greyColor rounded p-[5px] m-1 ml-2 
            shadow-btn3 shadow-greyColor/[.5]"
						>
							<IoReloadSharp
								className="size-[100px]"
								size="17px"
							></IoReloadSharp>
						</button>
					</div>

					<Buttons></Buttons>

					<Scores />
				</div>
			</div>
		</div>
	);
}

export default App;
