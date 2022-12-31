// Library
import { isEmpty } from 'lodash';
import React, { useState, useEffect } from 'react';

export interface POINodeType {
	id: number;
	nameDisplay?: {
		name: string;
		x: number;
		y: number;
	};
	x?: number;
	y?: number;
	type: string;
}

interface PathProps {
	POIData?: POINodeType[];
}

export const POI = ({ POIData }: PathProps) => {
	const [toRender, setToRender] = useState<JSX.Element[]>([]);

	const customPOI = (item: POINodeType) => {
		const POIs: { [key: string]: React.ReactNode } = {
			river: <></>,
			station: <rect fill="white" x={item.x} y={item.y} width={100} height="26" rx="9" />,
		};

		return (
			<>
				{POIs[item.type]}
				{item.nameDisplay && (
					<text fill="#4b555a" x={item.nameDisplay?.x} y={item.nameDisplay?.y}>
						{item.nameDisplay?.name}
					</text>
				)}
			</>
		);
	};

	useEffect(() => {
		if (POIData && !isEmpty(POIData)) {
			const POIs = POIData.map(item => customPOI(item));
			setToRender(POIs);
		}
	}, [POIData]);

	return (
		<>
			{toRender.map((item, ind) => (
				<React.Fragment key={ind}>{item}</React.Fragment>
			))}
		</>
	);
};
