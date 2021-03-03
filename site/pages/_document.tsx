import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class Document extends NextDocument {
	render() {
		return (
			// The custom document is necessary to provide the "light" theme on
			// first render (instead of relying on the useTheme hook) to avoid
			// a flash of un-themed content
			<Html lang="en" className="light">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default Document;
