import "@moai/core/font/remote.css";
import "@moai/core/index.css";
import { AppProps } from "next/app";
import Head from "next/head";
import "tailwindcss/utilities.css";

const favIcon: string = [
	"data:image/svg+xml,",
	"<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>",
	"<text y=%220.9em%22 font-size=%2290%22>🗿</text></svg>",
].join("");

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
	<>
		<Head>
			<title>Moai UI Kit</title>
			<link rel="icon" type="image/svg+xml" href={favIcon} />
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
		</Head>
		<Component {...pageProps} />
	</>
);

export default App;
