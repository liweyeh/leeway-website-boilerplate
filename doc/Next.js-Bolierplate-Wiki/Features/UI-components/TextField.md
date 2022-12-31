[[_TOC_]]

# Overview

- Purpose: Text input UI element
- Type: General UI
- Status: 🚀 **Completed**
- Code: [URL](https://dev.azure.com/ADASA-Accelerator/Website-React-Booster/_git/website-boilerplate-nextjs?path=/components/general/textField)
- Created by: Liwei Yeh <liwei.yeh@adasasistemas.com>
- Created time: 25/08/2022

# Props

- customStyles<`string`>: Custom styles
- type<`'text' | 'textarea'`>: Pre-set type for the html input tag
- label<`string`>: Label of the input element
- placeholder<`string`>: Default text that is displayed within the field
- errorMsg<`string`>: Msg to be displayed when the status is error
- status<`'valid' | 'error'`>: String for determining whether a error should be displayed
- maxLength<`number`>: Number for determining the text limit input
- handleChange<`(event: React.ChangeEvent<HTMLInputElement>) => void`>: onChange function for keeping track field value; debounce is built in
- defaultValue<`string`>: default value for edit mode

# Usage

```jsx
<TextField customStyles={styles.text} status="valid" type="textarea" />
```
