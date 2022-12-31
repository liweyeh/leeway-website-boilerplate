[[_TOC_]]

# Overview

- Purpose: A styled anchor element with proper accessbility support
- Type: General UI
- Status: 🚀 **Completed**
- Code: [URL](https://dev.azure.com/ADASA-Accelerator/Website-React-Booster/_git/website-boilerplate-nextjs?path=/components/general/navLink)
- Created by: Liwei Yeh <liwei.yeh@adasasistemas.com>
- Created time: 25/08/2022

# Props

\* = required

- children<`React.ReactNode`>\*: Display name or element
- href<`string`>\*: Desitnation of the anchor
- isExternal<`boolean`>: Dictate whether the link is external, which come with another behaviour
- onClick<`string`>: Callback function when link is clicked

# Usage

```jsx
<NavLink
	href={'https://www.google.com'}
	isExternal={true}
	onClick={() => {
		setIsOpen(false);
	}}
>
	<p>{displayName}</p>
</NavLink>
```
