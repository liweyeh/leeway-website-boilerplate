[[_TOC_]]

# Overview

- Purpose: A dropdown navigation menu
- Type: General UI
- Status: 🚀 **Completed**
- Code: [URL](https://dev.azure.com/ADASA-Accelerator/Website-React-Booster/_git/website-boilerplate-nextjs?path=/components/general/dropdown)
- Created by: Liwei Yeh <liwei.yeh@adasasistemas.com>
- Created time: 23/08/2022

# Props

\* = required

- children<`React.ReactNode`>\*: Content to be displayed in the dropdown menu
- menuOptions<`boolean`>: Options for the dropdown
- customStyles<`string`>: Custom styles, expecting scss modules

# Usage

```tsx
import styles from './mainLayout.module.scss';

export const MainLayout = () => {
	const links = [
		{ href: '/', isExternal: false, displayName: 'Home' },
		{ href: '/theme', isExternal: false, displayName: 'Theme' },
	];

	return (
		<div className={styles.container}>
			<div>
				<Dropdown menuOptions={links} customStyles={styles.menu}>
					<div className={styles['menu-icon']}></div>
				</Dropdown>
			</div>
		</div>
	);
};
```
