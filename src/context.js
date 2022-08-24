import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const AppContext = React.createContext();
const data = [
	{ isX: false, isO: false, id: 0, colorState: 0 },
	{ isX: false, isO: false, id: 1, colorState: 0 },
	{ isX: false, isO: false, id: 2, colorState: 0 },
	{ isX: false, isO: false, id: 3, colorState: 0 },
	{ isX: false, isO: false, id: 4, colorState: 0 },
	{ isX: false, isO: false, id: 5, colorState: 0 },
	{ isX: false, isO: false, id: 6, colorState: 0 },
	{ isX: false, isO: false, id: 7, colorState: 0 },
	{ isX: false, isO: false, id: 8, colorState: 0 },
];
const AppProvider = ({ children }) => {
	const [isXTurn, setIsXTurn] = useState(true);
	const [buttons, setButtons] = useState(data);
	const [isGameOver, setIsGameOver] = useState(false);
	const [isXWinner, setIsXWinner] = useState(true);
	const [isTie, setIsTie] = useState(false);
	const [blockButtons, setBlockButtons] = useState(false);
	const [xCounter, setXCounter] = useState(0);
	const [oCounter, setOCounter] = useState(0);
	const [tieCounter, setTieCounter] = useState(0);
	const ButtonClick = ({ id }) => {
		const { isX, isO } = buttons[id];

		if (isX === false && isO === false) {
			if (isXTurn) {
				buttons[id] = { ...buttons[id], isX: true, isO: false };
			} else {
				buttons[id] = { ...buttons[id], isX: false, isO: true };
			}
			let arr = [...buttons];
			setIsXTurn(!isXTurn);
			setButtons(arr);
		}
	};

	useEffect(() => {
		if (!blockButtons) {
			CheckWin();
			console.log("checking");
		}
	}, [...buttons]);

	const CheckWin = () => {
		const ids = [
			{ x: 0, y: 1, z: 2 },
			{ x: 3, y: 4, z: 5 },
			{ x: 6, y: 7, z: 8 },
			{ x: 0, y: 3, z: 6 },
			{ x: 1, y: 4, z: 7 },
			{ x: 2, y: 5, z: 8 },
			{ x: 0, y: 4, z: 8 },
			{ x: 6, y: 4, z: 2 },
		];
		for (let i = 0; i < ids.length; i++) {
			const xyz = ids[i];

			if (CheckXWin(xyz)) {
				setBlockButtons(true);
				XWon(xyz);
				console.log("X won");
				setIsTie(false);
				setIsXWinner(true);
				const timer = setTimeout(() => {
					setIsGameOver(true);
				}, 1000);

				return;
			}
			if (CheckOWin(xyz)) {
				setBlockButtons(true);
				OWon(xyz);
				console.log("O won");

				setIsTie(false);
				setIsXWinner(false);
				const timer = setTimeout(() => {
					setIsGameOver(true);
				}, 1000);
				return;
			}
		}
		let count = 0;
		for (let i = 0; i < 9; i++) {
			const { isX, isO } = buttons[i];
			if (isX == true || isO == true) {
				count += 1;
			}
		}
		if (count == 9) {
			setBlockButtons(true);
			Tie();
			setIsTie(true);
			const timer = setTimeout(() => {
				setIsGameOver(true);
			}, 1000);
		}
	};

	const CheckXWin = ({ x, y, z }) => {
		if (
			buttons[x].isX == true &&
			buttons[y].isX == true &&
			buttons[z].isX == true
		) {
			return true;
		}
		return false;
	};
	const CheckOWin = ({ x, y, z }) => {
		if (
			buttons[x].isO == true &&
			buttons[y].isO == true &&
			buttons[z].isO == true
		) {
			return true;
		}
		return false;
	};
	const XWon = ({ x, y, z }) => {
		const arr = [...buttons];
		arr[x] = { ...arr[x], colorState: 1 };
		arr[y] = { ...arr[y], colorState: 1 };
		arr[z] = { ...arr[z], colorState: 1 };

		setXCounter((cur) => cur + 1);
		setButtons(arr);
	};
	const OWon = ({ x, y, z }) => {
		const arr = [...buttons];
		arr[x] = { ...arr[x], colorState: 2 };
		arr[y] = { ...arr[y], colorState: 2 };
		arr[z] = { ...arr[z], colorState: 2 };

		setOCounter((cur) => cur + 1);
		setButtons(arr);
	};
	const Tie = () => {
		const arr = [...buttons];
		for (let i = 0; i < 9; i++) {
			arr[i] = { ...arr[i], colorState: 3 };
		}
		setTieCounter((cur) => cur + 1);
		setButtons(arr);
	};
	const NextRound = () => {
		setIsXTurn(true);
		setBlockButtons(false);
		setButtons([
			{ isX: false, isO: false, id: 0, colorState: 0 },
			{ isX: false, isO: false, id: 1, colorState: 0 },
			{ isX: false, isO: false, id: 2, colorState: 0 },
			{ isX: false, isO: false, id: 3, colorState: 0 },
			{ isX: false, isO: false, id: 4, colorState: 0 },
			{ isX: false, isO: false, id: 5, colorState: 0 },
			{ isX: false, isO: false, id: 6, colorState: 0 },
			{ isX: false, isO: false, id: 7, colorState: 0 },
			{ isX: false, isO: false, id: 8, colorState: 0 },
		]);

		setIsGameOver(false);
		console.log(buttons);
	};
	const Restart = () => {
		setXCounter(0);
		setOCounter(0);
		setTieCounter(0);
		setIsGameOver(false);
		setIsXTurn(true);
		setBlockButtons(false);
		setButtons([
			{ isX: false, isO: false, id: 0, colorState: 0 },
			{ isX: false, isO: false, id: 1, colorState: 0 },
			{ isX: false, isO: false, id: 2, colorState: 0 },
			{ isX: false, isO: false, id: 3, colorState: 0 },
			{ isX: false, isO: false, id: 4, colorState: 0 },
			{ isX: false, isO: false, id: 5, colorState: 0 },
			{ isX: false, isO: false, id: 6, colorState: 0 },
			{ isX: false, isO: false, id: 7, colorState: 0 },
			{ isX: false, isO: false, id: 8, colorState: 0 },
		]);
	};

	return (
		<AppContext.Provider
			value={{
				isXTurn,
				NextRound,
				isXWinner,
				buttons,
				ButtonClick,
				isGameOver,
				isTie,
				blockButtons,
				xCounter,
				tieCounter,
				oCounter,
				Restart,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
