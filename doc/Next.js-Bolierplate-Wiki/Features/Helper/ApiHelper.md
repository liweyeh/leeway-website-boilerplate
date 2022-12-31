[[_TOC_]]

# Overview

- Purpose: Util library for processing HTTP requests
- Type: Util
- Status: 🚀 **Completed**
- Code: [URL](https://dev.azure.com/ADASA-Accelerator/Website-React-Booster/_git/website-boilerplate-nextjs?path=/utils/APIHelper)
- Created by: Liwei Yeh <liwei.yeh@adasasistemas.com>
- Created time: 05/09/2022

# Methods

## useAxios

`useAxios` is a react hook which predfines the way of handling http request and its response, using the Axios library.

### Props

\* = required

- method<`data`>\*: Type of the HTTPs Request
- url<`string`>\*: The target endpoint
- headers<`AxiosRequestHeaders`>: The header of the request
- data<`object`>: The payload to wish to include within the request

### Usage

```tsx
import { useAxios } from '@/utils';
import { CONSTANT } from '@/constants';

export default function Testing() {
	const request = {
		method: 'POST',
		url: `${CONSTANT.API_BASE_URL}/posts`,
		headers: {
			accept: '*/*',
		},
		data: {
			userId: 1,
			id: 19392,
			title: 'title',
			body: 'Sample text',
		},
	};

	const { data, status, error } = useAxios(request);

	return (
		<>
			<main style={{ width: '100vw', height: '100vh' }}>
				<>
					<h2>Request Example:</h2>
					<p>Status:{status}</p>
					<p>Data: {JSON.stringify(data)}</p>
					<p>Error:{error}</p>
				</>
			</main>
		</>
	);
}
```
