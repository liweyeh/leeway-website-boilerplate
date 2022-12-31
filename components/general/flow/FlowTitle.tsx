interface FlowTitleProps {
	/** Title of flow and the position of it */
	title: {
		title: string;
		x: number;
		y: number;
	};
}
export const FlowTitle = ({ title }: FlowTitleProps) => {
	return (
		<>
			{title && (
				<text x={title.x} y={title.y}>
					{title.title}
				</text>
			)}
		</>
	);
};
