[[_TOC_]]

# Index.ts & Path Definition

In the following folders, you can find `index.ts` file:

- /components
- /components/general
- /components/layouts
- /components/specific
- /constants
- /context
- /public
- /types
- /utils

This file allows code within to be imported in the following manner from anywhere within the project (path defined in [`tsconfig.json`](../tsconfig.json):

```js
import { something } from '@components';
```

If you add a new file in the mentioned folders, please make sure to export it in the `index.ts` files for modularisation purposes.

# Major Files

## Components

This folder is for storing widgets, sections...etc. UI components that are only small parts of the page. Components can also be categorized as general and specific. General components are components that can be reused throughout the application. Generally, navigation UI or buttons are general components. Specific components are components that are built for a singular purpose. General components that are customized for a specific page or unique UI that will never be reused are specific components. Please put each component in its own folder due to the fact that storybooks and unit testing are added to this project.

These `components` can be imported in `tsx` files using `@components`

```js
import { something } from '@components';
```

## Constants

This folder is for storing variables that are used in various locations within the APP. It may be DB table name, specific watermark name...etc.

These `constants` can be imported in `tsx` files using `@const`

```js
import { something } from '@const';
```

## Context

This is for storing contexts (variables that are used in various places in the application). Please refer to this [documentation](https://reactjs.org/docs/context.html) for deciding whether you should context to store your data.

These `context` can be imported in `tsx` files using `@context`

```js
import { something } from '@context';
```

## Public

This folder is for storing media, images, and icons.

This content can be imported in `tsx` files using `@public`

```js
import { Arrow, Camera } from '@public';
```

### Sub-folders and files

`/icons` : contains the icons as `SVG` file but encapsulated in a `tsx` file. This gives us more flexibility, for instance, by changing some colors or parts of the vector file.

## Styles

This folder contains only the styling that is reused throughout the project, such as variables. mixins, or typography.

## Types

This is for interfaces/types that are highly reusable throughout the code base. If the type or interface is specified for a component, please put that interface closer to the reference

These `types` can be imported in `tsx` files using `@types`

```js
import { ClientType, NotificationType } from '@types';
```
