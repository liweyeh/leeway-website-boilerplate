[[_TOC_]]

# Overview

- Purpose: An accordion that has a header and body and can be toggled to show/hide body
- Type: General UI
- Status: 🚀 **Completed**
- Code: [URL](https://dev.azure.com/ADASA-Accelerator/Website-React-Booster/_git/website-boilerplate-nextjs?path=/components/general/accordion)
- Created by: Carlos Romera <cromera@adasasistemas.com>
- Created time: 16/08/2022

# Props

\* = required

- headerContent<`React.ReactNode`>\*: Content to be displayed in the header
- children<`React.ReactNode`>\*: Content to be displayed in the body
- disabled<`boolean`>: Disable the accordion to prevent click
- customStyles<`string`>: Custom styles

# Usage

```tsx
<Accordion headerContent={<h1>2</h1>}>
	<p>2</p>
</Accordion>
```
