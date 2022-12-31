[[_TOC_]]

# Overview

- Purpose: Colour control of entire application
- Type: Styling
- Status: 🚀 **Completed**
- Code: [URL](https://dev.azure.com/ADASA-Accelerator/Website-React-Booster/_git/website-boilerplate-nextjs?path=/styles/_themes.scss)
- Created by: Liwei Yeh <liwei.yeh@adasasistemas.com>
- Created time: 5/09/2022

# Usage

You can use `ThemeContext` to set the theme of the application.

```tsx
import { useContext } from 'react';
import { ThemeContext } from '@/context';
import { Button } from '@/components';
import { Theme } from '@/types';

export default function Theming() {
	const { setTheme } = useContext(ThemeContext);

	return (
		<Button
			onClick={() => {
				setTheme(prev => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK));
			}}
			size={'large'}
		>
			Click Me
		</Button>
	);
}
```

In scss file, you can use `themed` and `themify-module` to define the color for each themes for the component.

```scss
@use '../../../styles/themes' as theme;

.button {
	&-default {
		border-radius: 0;
		border: none;

		@include theme.themify-module(theme.$themes) {
			color: theme.themed('textColor');
			background-color: theme.themed('buttonColor');
			&:hover {
				background-color: theme.themed('buttonHoverColor');
			}
			&:active {
				background-color: theme.themed('buttonActiveColor');
			}
		}
	}
}
```

# Customisation

Theme can be defined in `_theme.scss`

```scss
$themes: (
	light: (
		backgroundColor: var.$cr-light-background,
		buttonColor: var.$cr-light-background-cta,
		buttonHoverColor: darken(var.$cr-light-background-cta, 5%),
		buttonActiveColor: darken(var.$cr-light-background-cta, 10%),
		backdropColor: var.$cr-light-background-backdrop,
		textColor: var.$cr-light-text,
		textDisabledColor: lighten(var.$cr-light-text, 10%),
		subtextColor: lighten(var.$cr-light-text, 5%),
		boxShadow: var.$box-shadow-light,
		errorColor: var.$cr-light-error,
		successColor: var.$cr-light-success,
	),
);
```

Please add more types in the `types.ts` when add more theme

```ts
export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}
```
