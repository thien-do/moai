import { AppProps } from "next/app";
import "tailwindcss/utilities.css";
import "@moai/core/index.css";
import "@moai/core/font/remote.css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
	<Component {...pageProps} />
);

export default App;
