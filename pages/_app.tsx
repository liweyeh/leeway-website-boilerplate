import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import './pageStyles/app.scss';
import { MainLayout, ThemeLayout } from '@/components';
import { ScreenSizeContextProvider, ThemeContextProvider } from '@/context';

type AppLayoutProps = AppProps & {
	Component: NextPage;
	pageProps: unknown;
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
	return (
		<ThemeContextProvider>
			<ScreenSizeContextProvider>
				<ThemeLayout>
					<MainLayout>
						<Component {...pageProps} />
					</MainLayout>
				</ThemeLayout>
			</ScreenSizeContextProvider>
		</ThemeContextProvider>
	);
}

export default MyApp;
