import { Button } from "@moai/core";
import Head from "next/head";

const Index = (): JSX.Element => (
	<div>
		<Head>
			<title>Moai UI Kit</title>
			<link rel="icon" href="/favicon.svg" />
		</Head>
		<p>Hello</p>
		<Button children="Hi" />
	</div>
);

export default Index;
