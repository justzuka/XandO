import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const AppContext = React.createContext();
const data = [
	{ isX: false, isO: false, id: 0 },
	{ isX: false, isO: false, id: 1 },
	{ isX: false, isO: false, id: 2 },
	{ isX: false, isO: false, id: 3 },
	{ isX: false, isO: false, id: 4 },
	{ isX: false, isO: false, id: 5 },
	{ isX: false, isO: false, id: 6 },
	{ isX: false, isO: false, id: 7 },
	{ isX: false, isO: false, id: 8 },
];
const AppProvider = ({ children }) => {
	const [isXTurn, setIsXTurn] = useState(true);
	const [buttons, setButtons] = useState(data);
	const [isGameOver, setIsGameOver] = useState(false);
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

	return (
		<AppContext.Provider value={{ isXTurn, buttons, ButtonClick, isGameOver }}>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
