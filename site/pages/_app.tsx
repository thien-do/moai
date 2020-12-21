import "@moai/core/font/remote.css";
import "@moai/core/index.css";
import { AppProps } from "next/app";
import Head from "next/head";
import "tailwindcss/utilities.css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
	<>
		<Head>
			<title>Moai UI Kit</title>
			<link rel="icon" href="/favicon.svg" />
		</Head>
		<Component {...pageProps} />
	</>
);

export default App;
