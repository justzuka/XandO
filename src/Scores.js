import { useGlobalContext } from "./context";

const Scores = () => {
	const { xCounter, oCounter, tieCounter } = useGlobalContext();
	return (
		<div className="flex gap-6 justify-between mx-3">
			<div
				className="h-[40px] w-[100%] items-center
            flex rounded-[10px] bg-xColor"
			>
				<h4 className="mx-auto text-[20px] font-[600]">{xCounter}</h4>
			</div>
			<div
				className="h-[40px] w-[100%] items-center
            flex rounded-[10px] bg-greyColor"
			>
				<h4 className="mx-auto text-[20px] font-[600]">{tieCounter}</h4>
			</div>
			<div
				className="h-[40px] w-[100%] items-center
            flex rounded-[10px] bg-oColor"
			>
				<h4 className="mx-auto text-[20px] font-[600]">{oCounter}</h4>
			</div>
		</div>
	);
};

export default Scores;
