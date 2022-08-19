import Button from "./Button";

import { useGlobalContext } from "./context";

const Buttons = () => {
	const { buttons } = useGlobalContext();
	return (
		<div
			className=" mx-auto my-1 grid 
        grid-cols-3 w-[100%]"
		>
			{buttons.map((button) => {
				const { id } = button;
				return <Button key={id} id={id}></Button>;
			})}
		</div>
	);
};

export default Buttons;
