// Library
import React from 'react';
import { FlowTitle } from './FlowTitle';
import { PathNodeType, Path } from './Path';
import { POINodeType, POI } from './POI';

interface FlowProps {
	/** Title of flow and the position of it */
	title: {
		title: string;
		x: number;
		y: number;
	};
	/** Size of the svg view box */
	viewBox: {
		width: number;
		height: number;
	};
	pathData: PathNodeType[];
	POIData: POINodeType[];
}

export const Flow = ({ title, viewBox, pathData, POIData }: FlowProps) => {
	return (
		<svg
			style={{ height: `${viewBox.height}px`, width: `${viewBox.width}px` }}
			viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
			xmlns="http://www.w3.org/2000/svg"
		>
			<FlowTitle title={title} />
			<Path pathData={pathData} />
			<POI POIData={POIData} />
		</svg>
	);
};
