# Components

This folder is for storing widgets, sections...etc. UI components that are only small parts of the page. Components can also be categorised as general and specific. General components are components that can be reused throughout the application. Generally, navigation UI or buttons are general components. Specific components are components that are built for a singular purpose. General components that are customised for a specific page or unique UI that will never be reused are specific component. Please put each component in its own folder due to the fact that story book and unit testing are added to this project.

These `components` can be imported in `tsx` files using `@components`

```js
import { something } from '@components';
```
