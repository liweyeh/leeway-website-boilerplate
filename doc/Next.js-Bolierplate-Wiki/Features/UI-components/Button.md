[[_TOC_]]

# Overview

- Purpose: Pre-styled button with accessbility support
- Type: General UI
- Status: 🚀 **Completed**
- Code: [URL](https://dev.azure.com/ADASA-Accelerator/Website-React-Booster/_git/website-boilerplate-nextjs?path=/components/general/button)
- Created by: Liwei Yeh <liwei.yeh@adasasistemas.com>
- Created time: 23/08/2022

# Props

\* = required

- children<`React.ReactNode`>\*: Button contents
- onClick<`(e: React.MouseEvent<HTMLButtonElement>) => void`>\*: Click handler
- ariaLabel<`string`>: aria-label
- size<`'small' | 'large'`>: preset size of the button
- type<`'primary' | 'secondary' | 'default' | 'disabled'`>: preset type which has its own styling and functionality
- customStyles<`string`>: Custom styles of the button

# Usage

```tsx
const handleOnClick = e => {
	console.log(e);
};

<Button onClick={handleOnClick} size={'large'}>
	Click Me
</Button>;
```

# Customisation

You can add/change the pre-style by changing SCSS code, such as the following:

```scss
// size
&-small {
	width: 100px;
	min-height: 40px;
}

// styling
&-primary {
	border: none;
	border-radius: var.$border-radius-s;

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

	@include btn();
}
```
