[[_TOC_]]

# Overview

- Purpose: A blank modal with backdrop
- Type: General UI
- Status: 🚀 **Completed**
- Code: [URL](https://dev.azure.com/ADASA-Accelerator/Website-React-Booster/_git/website-boilerplate-nextjs?path=/components/general/modal)
- Created by: Liwei Yeh <liwei.yeh@adasasistemas.com>
- Created time: 23/08/2022

# Props

\* = required

- children<`React.ReactNode`>\*: Content to be displayed in the modal
- open<`boolean`>: Control the visibility of the modal
- customModalStyle<`string`>: Custom styles for the modal
- customBackdropStyle<`string`>: Custom styles for the backdrop (background)
- closeable<`boolean`>: Control whether the modal can be closed via click on backdrop or the close button on top right
- handleClose<`() => void`>: Callback function when close is triggered

# Usage

```jsx
<Modal
	open={openModal}
	handleClose={() => setOpenModal(false)}
	customModalStyle={styles['nav-link-modal']}
	customBackdropStyle={styles['nav-link-modal-backdrop']}
>
	<h4>You are about to exit the website.</h4>
</Modal>
```
