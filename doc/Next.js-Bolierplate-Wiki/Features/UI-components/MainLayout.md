[[_TOC_]]

# Overview

- Purpose: A layout that can be used through multiple pages
- Type: Layout
- Status: 🚀 **Completed**
- Code: [URL](https://dev.azure.com/ADASA-Accelerator/Website-React-Booster/_git/website-boilerplate-nextjs?path=/components/layouts/main)
- Created by: Liwei Yeh <liwei.yeh@adasasistemas.com>
- Created time: 23/08/2022

# Props

\* = required

- children<`React.ReactNode`>\*: pages that you want this layout to be in

# Usage

```jsx
function MyApp({ Component, pageProps }: AppLayoutProps) {
	return (
		<ThemeContextProvider>
			<ScreenSizeContextProvider>
				<ThemeLayout>
					<MainLayout>
						<Component {...pageProps} />
					</MainLayout>
				</ThemeLayout>
			</ScreenSizeContextProvider>
		</ThemeContextProvider>
	);
}
```
