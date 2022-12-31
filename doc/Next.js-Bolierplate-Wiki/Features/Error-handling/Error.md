[[_TOC_]]

# Overview

- Purpose: Fallback UI when there is a HTTP request error
- Type: Error Handling
- Status: 🚀 **Completed**
- Code: [URL](https://dev.azure.com/ADASA-Accelerator/Website-React-Booster/_git/website-boilerplate-nextjs?path=/components/general/error)
- Created by: Liwei Yeh <liwei.yeh@adasasistemas.com>
- Created time: 15/08/2022

# Props

- statusCode<`string`>: HTTP status code

# Usage

```js
const DefaultError = () => {
	const [status, setStatus] = useState('');

	const ErrorDemo = ({ status }: { status: string }) => {
		useEffect(() => {
			if (status) throw 'api error';
		}, [status]);

		return <h3> Everything is fine </h3>;
	};

	const fallback = <Error statusCode={status} />;

	return (
		<>
			<main className={styles.main}>
				<h1>Organised error handling</h1>
				<Select
					customStyles={styles.select}
					label={'Error Code:'}
					options={['404', '500']}
					handleChange={v => {
						setStatus(v);
					}}
				/>
				<ErrorBoundary fallback={fallback}>
					<ErrorDemo status={status} />
				</ErrorBoundary>
			</main>
		</>
	);
};
```

# Customisation

You can add/change the status error response by changing the following code in `Error.tsx`:

```ts
const getError = (status?: string) => {
	switch (status) {
		case '404':
			return {
				code: '404',
				title: 'Error 404',
				subtext: 'There was an error with your request.',
			};
		case '500':
			return {
				code: '500',
				title: 'Internal server error',
				subtext: 'The server encountered an error and was unable to complete your request',
			};
		default:
			return {
				code: '???',
				title: 'Unknown error',
				subtext: 'An unknown error has occurred, Try refreshing the page or try again later.',
			};
	}
};
```
