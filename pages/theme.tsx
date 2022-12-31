// Library
import Head from 'next/head';
import { useContext } from 'react';
// Context
import { ThemeContext } from '@/context';

// Component
import { Button } from '@/components';

// Types
import { Theme } from '@/types';

// Styles
import styles from './pageStyles/theme.module.scss';

export default function Theming() {
	const { setTheme } = useContext(ThemeContext);
	return (
		<>
			<Head>
				<title>Adasa Boilerplate - Sample</title>
				<meta name="description" content="SEO HERE" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1>Theming</h1>
				<p>This boilerplate has built in theming functionailty</p>
				<Button
					onClick={() => {
						setTheme(prev => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK));
					}}
					size={'large'}
				>
					Click Me
				</Button>
				<p>Styling will be applied to various parts of UI with simple click of button</p>
			</main>
		</>
	);
}
