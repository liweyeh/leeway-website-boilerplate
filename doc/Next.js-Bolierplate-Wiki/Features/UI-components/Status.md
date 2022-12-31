[[_TOC_]]

# Overview

- Purpose: Notification that indicate the state of a form request
- Type: General UI
- Status: 🚀 **Completed**
- Code: [URL](https://dev.azure.com/ADASA-Accelerator/Website-React-Booster/_git/website-boilerplate-nextjs?path=/components/general/status)
- Created by: Liwei Yeh <liwei.yeh@adasasistemas.com>
- Created time: 23/08/2022

# Props

\* = required

- show<`boolean`>\*: Is status visible
- onClose<`() => void`>\*: Callback when status is going to close
- msg<`string`>\*: Text to be displayed in status
- status<`'error' | 'success'`>\*: Status type, error or success

# Usage

```jsx
<Status show status="error" msg="some error" />
```
