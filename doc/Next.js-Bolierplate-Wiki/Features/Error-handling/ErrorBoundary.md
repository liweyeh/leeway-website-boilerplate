[[_TOC_]]

# Overview

- Purpose: Component version of try and catch block
- Type: Error Handling
- Status: 🚀 **Completed**
- Code: [URL](https://dev.azure.com/ADASA-Accelerator/Website-React-Booster/_git/website-boilerplate-nextjs?path=/components/general/error)
- Created by: Liwei Yeh <liwei.yeh@adasasistemas.com>
- Created time: 15/08/2022

# Props

- children<`ReactNode`>: Content(s) that you wish to be within the try & catch block
- fallback<`ReactNode`>: Content to be displayed when there is an error

# Usage

For details, please read React's [article](https://reactjs.org/docs/error-boundaries.html) on this.

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
