/**
 * default error page
 * @author Liwei Yeh <liwei.yeh@adasasistemas.com>
 */

// Lib
import { useState, useEffect } from 'react';
import Head from 'next/head';

// Components
import { Error, Select, ErrorBoundary } from '@components';

// Styles
import styles from './pageStyles/defaultError.module.scss';

const ErrorDemo = ({ status }: { status: string }) => {
	useEffect(() => {
		if (status) throw 'api error';
	}, [status]);

	return <h3> Everything is fine </h3>;
};

const DefaultError = () => {
	const [status, setStatus] = useState('');

	const fallback = (
		<div className={styles['main-error-container']}>
			<Error statusCode={status} />
			<h3>
				This is a fallback UI when an error is thrown. You can check the console for the error
			</h3>
		</div>
	);

	return (
		<>
			<Head>
				<title>Page not found</title>
				<meta name="description" content="Adasa Boilerplate - Error Handling Demo" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
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

export default DefaultError;
