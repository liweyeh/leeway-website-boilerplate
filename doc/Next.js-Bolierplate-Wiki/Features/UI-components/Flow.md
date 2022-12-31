[[_TOC_]]

# Overview

- Purpose: Flow is for creating a node map, one similar to the one you see on the metro
- Type: General UI
- Status: 🚀 **Completed**
- Code: [URL](https://dev.azure.com/ADASA-Accelerator/Website-React-Booster/_git/website-boilerplate-nextjs?path=/components/general/flow)
- Created by: Liwei Yeh <liwei.yeh@adasasistemas.com>
- Created time: 22/08/2022

# Props

\* = required

- title<`{ title: string; x: number; y: number; }`>\*: Title of the map and the position of it
- viewBox<`{ width: number; height: number; }`>\*: Size of the SVG view box
- pathData<`PathNodeType[]`>: Node data for drawing lines within the map
- POIData<`POINodeType[]`>: Node data for drawing points of interest within the map

# Types

```ts
interface POINodeType {
	id: number;

	// where to display the title of POI
	nameDisplay?: {
		name: string;
		x: number;
		y: number;
	};

	x?: number;
	y?: number;
	type: string;
}

interface PathNodeType {
	id: number;
	name: string;
	x: number;
	y: number;

	// Dictate the connection between nodes, where to draw a path
	adjacentNodes: { id: number; type: string }[];
}
```

# Usage

## Implementation:

```tsx
<Flow
	title={{ title: 'I am the title', x: 100, y: 20 }}
	viewBox={{ width: 600, height: 600 }}
	pathData={pathData}
	POIData={poiData}
/>
```

## Sample data

### Path data

```js
[
	{
		id: 1,
		name: 'starting_point',
		x: 10,
		y: 10,
		adjacentNodes: [{ id: 2, type: 'river' }],
	},
	{
		id: 2,
		name: '2',
		x: 200,
		y: 140,
		adjacentNodes: [
			{ id: 3, type: 'road' },
			{ id: 4, type: 'river' },
		],
	},
	{
		id: 3,
		name: '3',
		x: 300,
		y: 70,
		adjacentNodes: [],
	},
	{
		id: 4,
		name: '4',
		x: 300,
		y: 210,
		adjacentNodes: [],
	},
];
```

### POI data

```js
[
	{
		id: 1,
		nameDisplay: {
			name: 'I am the first POI',
			x: 10,
			y: 10,
		},
		type: 'river',
	},
	{
		id: 2,
		nameDisplay: {
			name: 'I am the second POI',
			x: 220,
			y: 120,
		},
		x: 200,
		y: 140,
		type: 'station',
	},
	{
		id: 3,
		x: 400,
		y: 240,
		type: 'station',
	},
];
```

# Customisation

## Path customisation

Path can be customised by changing `pathCustomStyles` in the `Path.tsx`:

```ts
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
```

Also, you will need to dictate what style each path should use within the data:

```js
{
	"id": 1,
	"name": "starting_point",
	"x": 10,
	"y": 10,
	"adjacentNodes": [{ "id": 2, "type": "river" }] <---- changing the type here to change style
},
```

## POI customisation

POI can be customised by creating new svg element and import into `POI.tsx`:

```ts
// add new POI into the following object for new customisation:
const POIs: { [key: string]: React.ReactNode } = {
	station: <rect fill="white" x={item.x} y={item.y} width={100} height="26" rx="9" />,
};
```

Also, you will need to dictate what type of each POIs is within the data:

```js
	{
		"id": 1,
		"nameDisplay": {
			"name": "I am the first POI",
			"x": 10,
			"y": 10
		},
		"type": "station" <---- change this to match one of the field in POIs object
	},
```
