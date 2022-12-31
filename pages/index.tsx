// Library
import Head from 'next/head';

// Styles
import styles from './pageStyles/index.module.scss';

export default function Home() {
	return (
		<>
			<Head>
				<title>Adasa Boilerplate - Sample</title>
				<meta name="description" content="SEO HERE" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1 data-cy="header">Welcome to Adasa boilerplate</h1>
				<p data-cy="subtext">Go ahead and explore the features of this boilerplate</p>
			</main>
		</>
	);
}
