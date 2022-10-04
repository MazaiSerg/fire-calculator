import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextSeo
				title="FIRE калькулятор"
				description="Калькулятор расчета досрочного выхода на пенсию"
				canonical="https://mazaiserg.github.io/fire-calculator/"
			/>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
