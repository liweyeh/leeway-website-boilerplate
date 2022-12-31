import Head from 'next/head';
import { Error } from '@components';

const PageNotFound = () => {
	return (
		<>
			<Head>
				<title>Page not found</title>
				<meta name="description" content="Page not found" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main style={{ height: '100%' }}>
				<Error statusCode={'404'} />
			</main>
		</>
	);
};

// PageNotFound.layout = MainLayout;

export default PageNotFound;
