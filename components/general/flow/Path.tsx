// Library
import { isEmpty } from 'lodash';
import React, { useState, useEffect, useCallback } from 'react';

export interface PathNodeType {
	id: number;
	name: string;
	x: number;
	y: number;
	adjacentNodes: { id: number; type: string }[];
}

export interface PathType {
	from: PathNodeType;
	to: PathNodeType;
	type: string;
}

interface PathProps {
	pathData: PathNodeType[];
}

const pathCustomStyles: {
	[key: string]: object;
} = {
	river: {
		stroke: 'blue',
	},
	road: {
		stroke: 'brown',
		strokeWidth: '8px',
	},
};

export const Path = ({ pathData }: PathProps) => {
	const [path, setPath] = useState<PathType[]>([]);

	const iterateNode = useCallback(() => {
		const startingNode = pathData[0];
		const iterationQueue: PathNodeType[] = [startingNode];
		const visitedNode = new Set();
		const pathPair: PathType[] = [];

		while (iterationQueue.length !== 0) {
			const curNode = iterationQueue.shift();
			if (curNode && !visitedNode.has(curNode.id)) {
				visitedNode.add(curNode.id);
				const adjacents = curNode.adjacentNodes;
				adjacents.forEach(adjacentNode => {
					if (!visitedNode.has(adjacentNode.id)) {
						const curNodeItem = pathData.find(nodeItem => nodeItem.id === adjacentNode.id);
						if (curNodeItem) {
							pathPair.push({ from: curNode, to: curNodeItem, type: adjacentNode.type });
							iterationQueue.push(curNodeItem);
						}
					}
				});
			}
		}

		setPath(pathPair);
	}, [pathData]);

	const calcLengthAndDirection = (fromVal: number, toVal: number) => {
		const diff = toVal - fromVal;

		return [Math.abs(diff), diff / Math.abs(diff)];
	};

	useEffect(() => {
		if (pathData && !isEmpty(pathData)) {
			iterateNode();
		}
	}, [iterateNode, pathData]);

	return (
		<>
			{path.map(pathItem => {
				const { from, to } = pathItem;
				const [width, xDirection] = calcLengthAndDirection(from.x, to.x);
				const [height, yDirection] = calcLengthAndDirection(from.y, to.y);
				const shorterSide = Math.min(width, height);
				return (
					<path
						key={`${from.name}-${to.name}`}
						style={pathCustomStyles[pathItem.type]}
						d={`
					M ${from.x} ${from.y} 
					L ${from.x} ${to.y + shorterSide * 0.1 * -yDirection} 
					Q ${from.x} ${to.y}  ${from.x + shorterSide * 0.1 * xDirection} ${to.y} 
					L ${to.x} ${to.y}`}
						stroke="black"
						fill="transparent"
					/>
				);
			})}
		</>
	);
};
