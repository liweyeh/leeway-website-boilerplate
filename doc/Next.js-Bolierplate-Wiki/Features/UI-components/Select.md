[[_TOC_]]

# Overview

- Purpose: A dropdown select which is commonly used in form
- Type: General UI
- Status: 🚀 **Completed**
- Code: [URL](https://dev.azure.com/ADASA-Accelerator/Website-React-Booster/_git/website-boilerplate-nextjs?path=/components/general/select)
- Created by: Liwei Yeh <liwei.yeh@adasasistemas.com>
- Created time: 25/08/2022

# Props

- customStyles<`string`>: Custom styling
- label<`string`>: Label of the select list
- options<`string[]`>: Select options of the select list
- error<`boolean`>: Is there an error
- placeholder<`string`>: Default text that is displayed within the field
- errorMsg<`string`>: Msg to be displayed when the status is error
- handleChange<`(value: string) => void`>: onChange function for keeping track field value; debounce is built in

# Usage

```jsx
<Select
	customStyles={styles.select}
	label={'Error Code:'}
	options={['404', '500']}
	handleChange={v => {
		setStatus(v);
	}}
/>
```
